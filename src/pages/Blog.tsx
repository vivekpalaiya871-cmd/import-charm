import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

type Post = { id: string; title: string; content: string; date: string; image?: string };

const STORAGE_KEY = "meeraji_blog_posts";
const AUTH_KEY = "meeraji_blog_auth";
const ADMIN_EMAIL = "meeraji@gmail.com";
const ADMIN_PASS = "meera@7723";

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isAuth, setIsAuth] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setPosts(JSON.parse(raw));
    if (localStorage.getItem(AUTH_KEY) === "1") setIsAuth(true);
  }, []);

  const savePosts = (p: Post[]) => {
    setPosts(p);
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

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    const newPost: Post = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      date: new Date().toLocaleString(),
      image: image || undefined,
    };
    savePosts([newPost, ...posts]);
    setTitle("");
    setContent("");
    setImage("");
    setShowNew(false);
    toast({ title: "Post published" });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleDelete = (id: string) => {
    savePosts(posts.filter((p) => p.id !== id));
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-primary">Blog</h1>
            <p className="text-muted-foreground mt-2">Latest news and articles from Meera Ji Hospital</p>
          </div>
          <div className="flex gap-2">
            {isAuth ? (
              <>
                <Button variant="hero" onClick={() => setShowNew((v) => !v)}>
                  {showNew ? "Cancel" : "+ New Post"}
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
          <Card className="p-6 mb-8">
            <form onSubmit={handlePublish} className="space-y-4">
              <h2 className="text-xl font-semibold">New Blog Post</h2>
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor="image">Cover Image</Label>
                <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
                {image && (
                  <div className="mt-3 w-full aspect-[4/5] rounded-lg overflow-hidden bg-muted border border-border">
                    <img src={image} alt="preview" className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" rows={8} value={content} onChange={(e) => setContent(e.target.value)} required />
              </div>
              <Button type="submit" variant="hero">Publish</Button>
            </form>
          </Card>
        )}

        <div className="grid gap-6">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No blog posts yet.</p>
          ) : (
            posts.map((p) => (
              <Card key={p.id} className="p-6">
                {p.image && (
                  <div className="w-full max-w-xs aspect-[4/5] rounded-lg overflow-hidden mb-4 bg-muted border border-border mx-auto">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-semibold text-primary">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.date}</p>
                    <p className="mt-3 whitespace-pre-wrap text-foreground/85">{p.content}</p>
                  </div>
                  {isAuth && (
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(p.id)}>Delete</Button>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Blog;