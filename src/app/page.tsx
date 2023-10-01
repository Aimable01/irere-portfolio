import { MainLayout } from "@/components/MainLayout";
import { PostCard } from "@/components/PostCard";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-2 mt-3">
        <p className="text-xl">hey, I am irere 🖐!</p>
        <p>
          I try to keep things simple. You will find writing about technologies
          I am interested in at the time, or how I am learning and growing in my
          career, sharing knowledge along the way.
        </p>
        <div className="flex flex-col gap-4 pt-7">
          {allBlogs.slice(0, 2).map((b) => (
            <PostCard url={b.url} title={b.title} key={b._id} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
