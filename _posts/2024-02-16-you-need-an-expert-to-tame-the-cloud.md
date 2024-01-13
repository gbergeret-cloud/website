---
layout: post
title: You need an expert to tame the cloud
date:  2024-02-16 08:59:36 +0100
authors:
  - name: Geoffrey Bergeret
    title: Platform Engineer & DevOps Consultant
    picture: /assets/posts/authors/geoffrey-bergeret.jpg
cover:
  alt: Illustration with 3 hands taming the Cloud
  original: /assets/posts/covers/2024-02-16-you-need-an-expert-to-tame-the-cloud.svg
  thumbnail: /assets/posts/thumbnails/2024-02-16-you-need-an-expert-to-tame-the-cloud.svg
reading_time: 7
highlight: true
categories: article
tags: platformengineering devops devsecops cloud cloudnative
---

If you work at a technology business, the chances are it runs on a public cloud
platform. Cloud providers became the norm a while ago now, because they offer a
huge amount of functionality and a low barrier to entry. As a result, they help
businesses scale in a flexible and cost-efficient way. But even though cloud
platforms are easy enough to start with, they’re difficult to use to their full
potential.

That’s because they’re such vast, multifaceted systems. From storage to
networking to computing power, you can configure the building blocks of your
cloud platform in a multiplicity of ways. The opportunities are almost endless,
as are the things that could go wrong.

Managing those risks isn’t your cloud provider’s job. Nor is it down to your
developers, who are already busy building your product. But your cloud
infrastructure will fall into disarray if there isn’t anyone to give it some
love. The cloud is complicated, so it needs a dedicated expert to tame it.
That's why it’s critical to hire someone to do that job, to keep your business
secure, compliant and efficient.

## The shared responsibility model

The first thing to understand about cloud providers is that they see your
relationship as a two-way street. They operate using a “shared responsibility
model”, which means that they’re accountable for a specific set of security
tasks, while the others fall to you.

![Shared Responsibility Model (from AWS)](/assets/blog/images/2024-02-23-aws-shared-responsibility-model.drawio.svg)
*Amazon Web Services’ shared responsibility model*{: .caption }
{: .image }

Cloud providers are responsible for the
[security and availability of the cloud](https://aws.amazon.com/compliance/shared-responsibility-model){:target="_blank"}.
This refers to the infrastructure they provide, such as software, hardware and
[physical data centres](https://aws.amazon.com/compliance/data-center/controls){:target="_blank"},
which they protect from fire, power cuts, unauthorised access and more.

As a customer, you’re responsible for security “inside the cloud”. This boils
down to configuring the security of your platform and guaranteeing customer data
is protected. While cloud providers give you the building blocks, it's your
responsibility to assemble them properly.

## Easing the pressure with self-service

Your cloud platform won't stay secure and compliant by itself. Managing your
infrastructure is an ongoing job that requires someone who's fully accountable
for it. Today, this person is often referred to as a "cloud engineer",
"infrastructure engineer" or "platform engineer", but really they're simply a
"SysAdmin 2.0".

In any case, "platform engineer" is the most useful term. That’s because it
refers to the idea of engineering your platform, a broader and more accurate way
of talking about the infrastructure behind your product. Platform engineers are
there to embody DevOps culture and empower your developers. With their help, your
teams can be more efficient, productive and unified, which means they develop
better software, faster.

One way they do this is by making it easy for engineers to self-serve.
Self-service doesn’t just clear the path, it also paves the surface. It’s the
difference between moving quickly and being held up by sign-off at every stage.
With the cloud, that means going beyond the basics, by preconfiguring certain
tools and functionality, so engineers don’t have to repeatedly start from scratch.

Let's say one of your engineering squads needs a new data store, as part of a
feature build. A platform engineer will ensure they have the right data store
capabilities at their disposal, and make sure they’re pre-configured in a
compliant and secure way. As a result, engineers can hit the ground running,
without having to worry about things like privacy, storage capacity and how data
is backed up.

## Your cloud provider won’t take care of your platform

Take Amazon S3, a popular
[object storage](https://aws.amazon.com/what-is/object-storage){:target="_blank"}
service. You might use it to store sensitive company data or personally
identifiable information (PII), like the names and email addresses you capture on
your website. If you forget to make this data private, you not only risk exposing
something valuable, you could be in breach of GDPR.

It isn’t Amazon’s problem if you accidentally make this PII public. To avoid a
situation like this, you should ensure the compliance work is always done
up-front, by making sure every data store is secure by design. The alternative,
where no one’s accountable, could be extremely costly.

Putting the right safeguards in place empowers your engineers and protects your
platform. Your developers have other responsibilities, so it isn’t fair to put
the security and compliance of your infrastructure on them. Even if they are
familiar with DevOps practices, your software engineers won’t focus on your core
platform because it isn’t their primary role.

## Closing the responsibility gap

This responsibility gap can cause damage in other ways, like the tools your
developers use, which are at risk of cyber attacks. Let’s say your API keys get
compromised, after your CI/CD provider was affected by a data breach. It’s hard
to react quickly if there isn’t anyone in charge of your core platform.

Depending on the situation, you may decide to pull the plug on the tool,
effectively pausing all engineering work, which would delay important work like
bug fixes and feature delivery. If you have the right preventative measures in
place, you wouldn’t be forced to do something so drastic.

These measures would include secrets rotation, where API keys and other security
credentials are automatically recycled on a regular basis. It’s also likely that
a DevSecOps specialist would have set up an identity authentication protocol like
OpenID Connect (OIDC), to standardise how services are authenticated and
authorised, without the need for traditional secrets.

## Making the cloud easier to control

These principles of automation and standardisation are at the heart of platform
engineering. They help developers move faster, be more efficient and stick to a
set of approved standards. Without systems like this, people end up hitting the
same barriers again and again and building different solutions for the same issue.

In fact, standardisation goes hand in hand with a self-service mentality, because
it prevents costly mistakes and sets engineers up for success. Commercial teams
follow the same approach, ensuring consistency by coaching salespeople to use the
same key messages as marketing. Keeping the cloud watertight is even more
crucial, not just because it has security implications, but because it underpins
almost everything you do.

Yet all too often, businesses think their cloud infrastructure will run itself.
But the reality is that using public cloud platforms require a unique set of
skills to keep them under control. Without the right attention, they fall into
disarray. And if neither your cloud provider nor your developers are giving your
platform love, then no one is. That’s why you need a platform engineering
function.

Fortunately, with the right support, platform engineering is easy to get started
with. If you’d like to find out more, please feel free to get in touch.

