"use client";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface RepoProps {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<RepoProps[]>([]);

  const fetchRepos = useCallback(async () => {
    const token = process.env.NEXT_PUBLIC_GH_TOKEN;
    const url = "https://api.github.com/user/repos";
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setRepos(json);
    } catch (error: unknown) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);


  // I need to refurbish my repos
  return (
    <>
      <Layout>
        <div className="bg-dark2 font-Cascadia">
          <h1># Projects </h1>
          <hr className="border-dark-200 my-3"></hr>
          <div>
            {repos.length > 0 ? (
              <div className="grid grid-cols-3  gap-4">
                {repos.map((repo, idx) => (
                  <div key={idx} className="border w-[290px] rounded-md p-2">
                    <div>
                      <Link href={repo.html_url}>{repo.name}</Link>
                      <p className="text-xs text-[#92cded]">{repo.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No repositories found.</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
