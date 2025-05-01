import React from 'react';
import blogPosts from '../data/blogPosts';

export default function Blog() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.id} className="border p-4">
            <h2 className="font-semibold text-xl">{post.title}</h2>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
