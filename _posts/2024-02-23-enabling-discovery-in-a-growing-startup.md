---
layout: post
title: Enabling feature discovery in a growing startup
date:  2024-02-23 08:59:36 +0100
authors:
  - name: Geoffrey Bergeret
    title: Platform Engineer & DevOps Consultant
    picture: /assets/posts/authors/geoffrey-bergeret.jpg
cover:
  alt: Harvie Logo (feat with GBergeret Cloud Services)
  original: assets/posts/covers/2024-02-23-enabling-discovery-in-a-growing-startup.svg
  thumbnail: assets/posts/thumbnails/2024-02-23-enabling-discovery-in-a-growing-startup.svg
testimonial:
  message: |
    Geoffrey helped us implement a design that allows us to rapidly spin up an
    environment for an individual branch, without paying the overhead for
    maintaining a bunch of QA environments. This has led to gains in throughput
    for our engineers, but even bigger gains for our product management process.
    Now staff can quickly pop into any feature that someone is working on, check
    it out and give feedback. When we launched this model we quickly went from
    deploying two to three tickets a week to deploying 10+.
  author:
    name: Kyle Jaster
    title: Chief Operation Officer
    company: Harvie
    contact: https://www.linkedin.com/in/kyle-jaster-b9013bb/
reading_time: 5
categories: casestudy
---

Harvie is a US-based grocery delivery business that connects people with local
farms. Customers order through the company’s website, then get fresh, seasonal
products delivered to their door.

Four years ago, back when lots of tech companies used
[Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow){:target="_blank"},
Harvie wanted to reduce the friction involved in tracking, managing and releasing
new features. I worked with the business to dramatically speed up this process,
bridging the gap between local development and production. But I also went much
further, by rethinking Harvie’s cloud infrastructure and making it more secure
and reliable.

![Gitflow workflow](/assets/blog/images/2024-02-16-gitflow-workflow.svg)
*Harvie’s original route from development to production used Gitflow, which was
prone to traffic.*{: .caption }
{: .image }

## The challenge: too many developers for one QA environment

Harvie works with perishable and seasonal produce, which makes its inventory too
dynamic for off-the-shelf e-commerce platforms to handle. So it created its own
bespoke e-commerce engine. As part of that, its engineers were regularly adding
new features to improve the platform’s functionality, offer more choice and cater
to peak periods like Thanksgiving.

As with every tech business, Harvie tests its new features before releasing them.
But its non-production environments weren’t just costing it a lot of money to
run, they were also accumulating a lot of dummy data, making them harder to use.
The more non-production environments Harvie ran, like QA and staging, the further
its engineers were from the live environment that users see.

These non-production environments were also bottlenecked by design. Every
engineer was using the same staging environment to test features, causing a
traffic jam in the development and release process. With too many developers
racing for the same QA environment, it could take several days to get a simple
feature tested and released to users.

The obvious solutions didn’t work. Harvie’s engineers couldn’t test more locally,
because the business uses a cloud native application and relies on cloud services
to run. Emulators weren’t reliable enough to get around this. Harvie couldn’t
just make more QA environments either, because of the costs involved. And with
its QA environments being used less than 5% of the amount of time it was paying
for, Harvie clearly needed a more efficient approach.

## How I helped: rethinking the dev life cycle

First, I worked with Harvie to improve its development life cycle and CI/CD
pipelines. This meant totally rethinking how Harvie uses QA environments and the
cloud more broadly, to create something genuinely sustainable. This hinged on the
implementation of a new GitlabCI pipeline, which creates a dedicated and
full-size QA for each time piece of new feature work, so that Harvie could run
multiple QAs at once.

As part of this, I made QAs ephemeral. This means that QAs are created each time
developers start working on a feature and auto-deleted when that work is finished
or idle. I achieved this using Terraform, an infrastructure as code tool that
allows Harvie to automate the process of running QA environments. GitlabCI was
also vital here: not only through creating and deleting QAs, which it does with
Terraform, but also to populate the environments with seed data with each new
pull request.

## The results: far more efficient, cost-effective testing

Those ephemeral environments resulted in a dramatically more efficient system.
We didn't just allow Harvie to have more QA environments, we empowered its
engineers to use them more cost-effectively, since they now only pay for what
they use. In the world of cloud services, running 20 things for one hour costs
the same as running one thing for twenty hours. With our help, Harvie was able to
pay more than 10 times less for the same outcomes.

At the same time, we created a world where every engineer could have their own
(or even multiple) QAs. This means Harvie can keep up better with the demand for
new features. These efficiency gains came down to bridging the gap between local
development and production. Rather than an emulator faking it, we created
environments that functioned like an extension of each engineer’s laptop. We
gave every engineer their own personal testing playground, where they could try
ideas quickly and do whatever they want without impacting anyone else.

![Review Environment workflow](/assets/blog/images/2024-02-16-review-env-workflow.svg)
*Harvie’s new, smoother ephemeral QA model, with production as the only lasting
environment.*{: .caption }
{: .image }

Overall, we empowered Harvie’s team and streamlined its development life cycle.
This also improved Harvie’s DevOps culture more broadly, bringing its developers
closer to the reality users interact with. All this made it possible to
reverse-engineer the whole setup of Harvie’s production environment, which I did
alongside fully automating the setup of each new QA. Each QA uses clean data as a
result – another big win.

Ultimately, I helped Harvie free up its engineers and get new features out a lot
more quickly. I turned something once clogged with traffic into a clear path, for
the same price as Harvie was paying before. And by building a deeper
understanding of Harvie’s setup in the process, I helped it leverage the cloud
more effectively in the long-term.
