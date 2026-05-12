import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

type Photo = { id: string; image: string; caption?: string; date: string };

const STORAGE_KEY = "meeraji_gallery_photos";
const AUTH_KEY = "meeraji_blog_auth";
const ADMIN_EMAIL = "meeraji@gmail.com";
const ADMIN_PASS = "meera@7723";

const Gallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isAuth, setIsAuth] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string>("");
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setPhotos(JSON.parse(raw));
    if (localStorage.getItem(AUTH_KEY) === "1") setIsAuth(true);
  }, []);

  const save = (p: Photo[]) => {
    setPhotos(p);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASS) {
      localStorage.setItem(AUTH_KEY, "1");
      setIsAuth(true);
      setShowLogin(false);
      setEmail("");
      setPassword("");
      toast({ title: "Logged in", description: "Welcome back!" });
    } else {
      toast({ title: "Invalid credentials", variant: "destructive" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuth(false);
  };

  const cropToSquare = (dataUrl: string): Promise<string> =>
    new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const size = Math.min(img.width, img.height);
        const sx = (img.width - size) / 2;
        const sy = (img.height - size) / 2;
        const canvas = document.createElement("canvas");
        const out = 800;
        canvas.width = out;
        canvas.height = out;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, sx, sy, size, size, 0, 0, out, out);
        resolve(canvas.toDataURL("image/jpeg", 0.9));
      };
      img.src = dataUrl;
    });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const square = await cropToSquare(reader.result as string);
      setImage(square);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      toast({ title: "Please select a photo", variant: "destructive" });
      return;
    }
    const newPhoto: Photo = {
      id: Date.now().toString(),
      image,
      caption: caption.trim() || undefined,
      date: new Date().toLocaleString(),
    };
    save([newPhoto, ...photos]);
    setImage("");
    setCaption("");
    setShowNew(false);
    toast({ title: "Photo uploaded" });
  };

  const handleDelete = (id: string) => {
    save(photos.filter((p) => p.id !== id));
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-primary">Gallery</h1>
            <p className="text-muted-foreground mt-2">Photos from Meeraji Hospital - Multispeciality, Trauma and Maternity Centre</p>
          </div>
          <div className="flex gap-2">
            {isAuth ? (
              <>
                <Button variant="hero" onClick={() => setShowNew((v) => !v)}>
                  {showNew ? "Cancel" : "+ Upload Photo"}
                </Button>
                <Button variant="outline" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <Button variant="outlinePrimary" onClick={() => setShowLogin((v) => !v)}>
                {showLogin ? "Cancel" : "Admin Login"}
              </Button>
            )}
          </div>
        </div>

        {showLogin && !isAuth && (
          <Card className="p-6 max-w-md mb-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <h2 className="text-xl font-semibold">Admin Login</h2>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" variant="hero" className="w-full">Login</Button>
            </form>
          </Card>
        )}

        {showNew && isAuth && (
          <Card className="p-6 mb-8 max-w-xl">
            <form onSubmit={handleUpload} className="space-y-4">
              <h2 className="text-xl font-semibold">Upload Photo</h2>
              <div>
                <Label htmlFor="image">Photo (auto-cropped to square)</Label>
                <Input id="image" type="file" accept="image/*" onChange={handleImageChange} required />
                {image && (
                  <div className="mt-3 w-48 aspect-square rounded-lg overflow-hidden bg-muted border border-border">
                    <img src={image} alt="preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="caption">Caption (optional)</Label>
                <Input id="caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
              </div>
              <Button type="submit" variant="hero">Upload</Button>
            </form>
          </Card>
        )}

        {photos.length === 0 ? (
          <p className="text-muted-foreground">No photos yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {photos.map((p) => (
              <div key={p.id} className="group relative aspect-square rounded-lg overflow-hidden bg-muted border border-border shadow-sm">
                <img
                  src={p.image}
                  alt={p.caption || "Gallery photo"}
                  className="w-full h-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  onClick={() => setLightbox(p.image)}
                />
                {p.caption && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-xs text-white">
                    {p.caption}
                  </div>
                )}
                {isAuth && (
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </Button>
                )}
              </div>
            ))}
          </div>
        )}

        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} alt="" className="max-w-full max-h-full rounded-lg" />
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Gallery;