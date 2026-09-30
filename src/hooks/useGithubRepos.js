import { useEffect, useState } from "react";

const TTL = 10 * 60 * 1000; // cache for 10 minutes to stay under GitHub's anonymous rate limit

// Fetches every public repo for a user, live, each time the site loads.
export function useGithubRepos(username) {
  const [state, setState] = useState({ status: "loading", repos: [] });

  useEffect(() => {
    const key = `gh-repos:${username}`;
    try {
      const cached = JSON.parse(sessionStorage.getItem(key) || "null");
      if (cached && Date.now() - cached.at < TTL) {
        setState({ status: "ready", repos: cached.data });
        return;
      }
    } catch {
      /* ignore bad cache */
    }

    const controller = new AbortController();
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
        return res.json();
      })
      .then((data) => {
        try {
          sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), data }));
        } catch {
          /* storage may be unavailable */
        }
        setState({ status: "ready", repos: data });
      })
      .catch((err) => {
        if (err.name !== "AbortError") setState({ status: "error", repos: [] });
      });

    return () => controller.abort();
  }, [username]);

  return state;
}
