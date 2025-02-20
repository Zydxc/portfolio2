"use client";
import Layout from "@/components/Layout";
import { useCallback, useEffect, useState } from "react";

interface RepoProps  {
  id: number;
  name: string;
  html_url: string;
  description: string;
};

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


console.log(repos);
// I need to refurbish my repos 
  return (
    <>
      <Layout>
        <div className="bg-dark2 font-Cascadia">
          <h1># Projects </h1>
          <hr className="border-dark-200 my-3"></hr>
          <div>
            {repos.length > 0 ? (
              <ul>
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                    <p>{repo.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No repositories found.</p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
