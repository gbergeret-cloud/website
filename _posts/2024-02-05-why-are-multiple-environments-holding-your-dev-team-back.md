---
layout: post
title: Why are multiple environments holding your dev team back?
date:  2024-02-05 08:59:36 +0100
authors:
  - name: Geoffrey Bergeret
    title: Platform Engineer & DevOps Consultant
    picture: /assets/blog/blog-author-geoffrey.jpg
cover:
  alt: Company logo (feat with Mono-Env)
  original: /assets/blog/covers/2024-02-05-why-are-multiple-environments-holding-your-dev-team-back.jpg
  thumbnail: /assets/blog/thumbnails/2024-02-05-why-are-multiple-environments-holding-your-dev-team-back.jpg
reading_time: 3
categories: ideas
tags: platformengineering devops devsecops cloud cloudnative
---

DevOps is all about producing better software faster. So I'm always thinking
about new ways to save resources, reduce risk and roll out features in a more
streamlined way.

That's why I'm really excited about the idea of a
[Mono-environment](https://monoenv.tech/), a more efficient approach to
production. It’s a method I’ve used successfully at multiple companies, which
means you can deploy to production over 100 times a day.

## What is a Mono-environment?

The production environment is the final phase of deployment, where you get the
latest version of your software out to users. But before you get your changes
live, the traditional approach is to test them across multiple environments,
such as staging and Quality Assurance (QA).

While those environments can help you catch issues early, a phased approach has
its drawbacks. Issues can still slip through – and you’ll end up dedicating a
lot of time, money and energy to this false sense of security. Ultimately, when
you’re building and maintaining testing environments, you deliver value to users
more slowly.

Running a Mono-environment lets you channel all of your resources into
production. By focusing exclusively on this single environment, you get
something faster, more cost-efficient and of a higher quality.

A lot of this approach comes down to doing smaller releases, more often.
That reduces risk and makes changes easier to track, which also means issues
end up being less of a big deal. Still, there are mechanisms in place to prevent
problems, such as feature flags or automatic rollback.

When you run a production-only environment, engineers become more practiced and
confident, with fewer barriers and more ownership around making a feature work.
This means there’s a shorter feedback loop, which also ensures everything’s
still front of mind when something breaks. As Amazon CTO Werner Vogels said,
"you build it, you run it". Most of all, teams with a "production-first" mindset
build in a higher standard from the start.

## What does this mean for you?

I've noticed quite a few organisations already running Mono-environments to some
extent, even if they aren’t really promoting it. This includes two of my clients,
Harvie, a grocery delivery service, and Cintra, a payroll and HR tool.
Ultimately, more efficient approaches like this come naturally as part of a
strong DevOps culture. When you have good engineering practices, along with
healthy CI/CD pipelines, you’ll inevitably reduce the gap between ideas and live
product features.

If you'd like to learn more about a Mono-environment or production-only approach,
[I'd love to discuss it with you]({{ site.url }}#contact), even if it isn’t right
for your business just yet. But for now, I just want to spread the word. You can
read more about [running a Mono-environment here](https://monoenv.tech), in a
manifesto I’ve co-authored with my old colleagues Paolo Escobar and Michael
Hancock, who are both using Mono-environments in their current engineering
leadership roles.
