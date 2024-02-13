---
template: BlogPost
path: /data-ownership/
date: 2023-12-13T12:15:14.780Z
title: "Data Ownership: Debates, Policy, a Blockchain-Driven Future?"
metaDescription: Defining data ownership. Demonstrating debates and (EU) policy
  in the field from the side of government, business, and privacy-focused
  organisations. Exploring blockchain as a medium for streamlining data
  ownership.
author: Rachel Byfleet
canonical: https://policyblocks.co/data-ownership/
---

---

### Table of Contents

1. [Defining Data Ownership](#definition)
2. [Background and Current Debates about Data Ownership](#background-debates)
3. [The GDPR and Data Ownership](#gdpr)
4. [Government Surveillance and Data Ownership](#government-surveillance)
5. [ePrivacy Regulation and Data Ownership](#eprivacy-regulation)
6. [Blockchain and Data Ownership](#blockchain)
7. [Conclusion: What's next?](#whats-next)

---

## <div id="definition">Defining Data Ownership</div>

Who owns your data? Think location tracking, purchase patterns, search history, social media posts, the list goes on. Big tech companies are increasingly making money off of this valuable data and it begs the question: What right, if any, do individuals have over their data?

In my [most recent article](https://policyblocks.co/data-governance/) outlining data governance principles and blockchain’s potential, I briefly touched on data ownership as part of a governance framework. However, there are many layers to data ownership, both philosophically and legally, and therefore a deeper dive on the topic is warranted. For both individuals seeking increased control over their data, and for organisations navigating the complexities of emerging regulations, understanding what data ownership is all about is crucial.

For individuals, data ownership refers to the controlling of access to personal data such as health records, location patterns, and really any other sensitive, personal information that is available about you online. We can see this emerging more and more everyday when we are forced to read privacy regulations, opt in or out of cookies, and the like.

From an organisational standpoint, data ownership refers to management who is eligible to access customer data, ensuring compliance with internal and legal regulations, and all of this while ensuring security is front of mind.

In short, data ownership for organisations centres on accountability and responsibility, whereas individual ownership centres on permissions and retaining control.

Unlike data governance, I initially thought data ownership to be slightly more straightforward in terms of what it looked like practically. However, there are several intricate frameworks, concepts, and again, EU regulations that are crucial to stay up to date with. Therefore, my goal with this article is to clarify what data ownership means amidst this changing landscape. I will begin by providing context surrounding current debates, explain how blockchain factors in, and end by discussing challenges and the future of data ownership. Hopefully by the end, you’ll have a comprehensive understanding about what this all means and why it’s important.

## <div id="background-debates">Background and Current Debates about Data Ownership</div>

Data ownership must strike a balance between increasing data availability, while ensuring individuals retain ownership and control. This has sparked numerous academic debates discussing whether data is, or should be, treated as a public good or as a property right. Some argue that data ownership is critical in the digital age, but there does not yet seem to be consensus on the practicalities. Others believe data should be used as a public good and therefore, be freely accessible. A third group argues that personal data protection is about privacy rights rather than ownership rights, thus having nothing to do with property [(Thouvenin & Tamò-Larrieux 2021)](https://www.cambridge.org/core/books/big-data-and-global-trade-law/data-ownership-and-data-access-rights/BC314C63C58A09C4B9C5D55894FE68C6).

However, after reading through these debates, I felt like the philosophical questions didn’t provide much clarity or common understanding around what data sets exist, who holds them, and who gets access to them. For example, platforms like Google and Meta collect vast amounts of data from search histories and other sources and house potentially sensitive data. And while they may use it for analytics, targeting, etc., there is not always full visibility for the users themselves.

Amidst these debates, the EU has developed strategies like the [European Digital Strategy](https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age_en), the [Data Governance Act](https://digital-strategy.ec.europa.eu/en/policies/data-governance-act), and the [Data Act](https://ec.europa.eu/commission/presscorner/detail/en/ip_23_3491) to outline data collection and set perimeters around data collection and sharing. Their goal is to, again, strike the delicate balance between ensuring users have control over their data, while still working to allow data to be used for social benefits and innovation. What I mean here is personal data that can give valuable insights to topics such as population statistics and disease spread models, and can help advance innovation. But of course we must then ask who can access this data, under what terms, and through which platforms.

While I have previously discussed the aforementioned EU policies at length, I haven’t yet dug into the [General Data Protection Regulation](https://gdpr-info.eu/) (GDPR), government surveillance policies, and [ePrivacy Regulations](https://digital-strategy.ec.europa.eu/en/policies/eprivacy-regulation). I’m hoping that by delving into these a bit more, I can provide better insight into the trade-offs surrounding open data innovation and individual privacy.

## <div id="gdpr">The GDPR and Data Ownership</div>

The EU’s General Data Protection Regulation (GDPR) is likely the most well-known data-related regulation.

> “The GDPR governs how the personal data of individuals in the EU may be processed and transferred and is the strongest privacy and security law in the world.” - [European Commission](https://www.consilium.europa.eu/en/policies/data-protection/data-protection-regulation/#:~:text=The%20GDPR%20establishes%20the%20general,data%20processing%20operations%20they%20perform.)

Enforced by the [European Data Protection Board](https://edpb.europa.eu/edpb_en), the GDPR establishes rules and guidelines to ensure individuals’ rights regarding their personal data. The GDPR also ensures compliance and imposes sanctions for organisations that violate the rules.

The regulation outlines the need for individuals to provide clear consent to data processing, the right to revoke data and be forgotten, and the ability to port data between service providers. In essence, it gives the individual greater control over their personal information and holds organisations to account. For businesses, the GDPR mandates that data handlers have an obligation to ensure security measures, appoint a data protection officer, and notify individuals in the event of a security breach.

[Thouvenin & Tamò-Larrieux (2021)](https://www.cambridge.org/core/books/big-data-and-global-trade-law/data-ownership-and-data-access-rights/BC314C63C58A09C4B9C5D55894FE68C6) summarise:

> “For users to have sufficient trust and confidence in the free flow of personal data, rules governing this flow must be adopted, and the European Commission sees the GDPR as the critical building block to do so.”

However, their paper also points out that the GDPR’s strong data protections can conflict with the EU’s efforts to foster free-flowing data as mentioned in its Data Governance Act. Nevertheless, the GDPR is an important step in the right direction of allowing individuals input on where and how their data is used.

## <div id="government-surveillance">Government Surveillance and Data Ownership</div>

One of the most contentious areas of data ownership is around the topic of government surveillance powers and citizens’ ownership rights. Different countries have different implementations. The United States’ [FBI uses NITs (Network Investigative Techniques)](https://www.fbi.gov/investigate/cyber); the Russians use a [SORM system](https://cepa.org/article/russias-surveillance-state/) which allows authorities to monitor, analyse, and install malware; China has what’s known as the [“Great Firewall”](https://cs.stanford.edu/people/eroberts/cs181/projects/2010-11/FreeExpressionVsSocialCohesion/china_policy.html) that employs surveillance and censorship; and the Germans employ a [Staatstrojaner](https://edri.org/our-work/edrigramnumber10-20details-german-state-spyware-staatstrojaner/), or “state trojan,” which is a surveillance software that can be secretly installed on devices to monitor communications.

I want to focus on Germany’s Staatstrojaner because it demonstrates the tension between the government’s powers and citizens privacy rights in a country where data ownership is highly valued.

The policy’s history started in the early 2000s when German police started to use the spyware to fight crime. Ethical questions emerged and in 2017, the law greatly expanded to allow police to hack devices to read encrypted messages through platforms such as WhatsApp. However, a few years later, the Federal Constitutional Court ruled that it was partially unconstitutional and that it should only be used to combat more serious crimes, like terrorism, rather than all crime prevention.

While there are greater limitations as to how the German police can use the Staatstrojaner, there is limited transparency in regards to how they operate. Europe’s largest association of hackers and cybersecurity experts, the [Chaos Computer Club (CCC)](https://www.ccc.de/en/updates/2011/analysiert-aktueller-staatstrojaner), has been heavily involved in raising awareness about state-sponsored spying. They are advocating to remove the authorisation to use malware from the Code of Criminal Procedure altogether, going on to argue that it was a mistake to normalise this level of state spying software. In a recent statement, they [explain why it’s important that it be corrected](https://www.ccc.de/en/updates/2023/schon-wieder-staatstrojaner-vorm-verfassungsgericht), as unchecked government surveillance can lead to potential misuses of power, jeopardise security, and put the wider population at risk of being spied on.

This exemplifies the push and pull between government power and individual data rights. I personally think government surveillance that infringes on personal data is comparable to private sector exploitation. In the same way I argue that organisations should respect user data, governments should also respect civil liberties as it ultimately increases trust.

## <div id="eprivacy-regulation">ePrivacy Regulation and Data Ownership</div>

Another regulation I want to touch on is one that is still being debated: the ePrivacy Regulation in the European Union. If implemented, the legislation would strengthen privacy regulations and expand to messaging platforms such as WhatsApp. Aligning to the position taken by the CCC, the regulation would impose strict oversight and limit when authorities can access communications data.

However, the regulation has faced criticisms from big tech companies that argue reducing access to this type of data will hinder targeted ads. However, I would argue that some of this is being mitigated with the latest Data Governance Act. And, in my view, unregulated commercial use of personal data to create targeted ads highlights why data ownership is important in the first place. The digital ad industry holds a disproportionate amount of power over user data with little transparency or consent. The digital ad industry [makes billions of dollars through personal data targeting](https://cbscreening.co.uk/news/post/your-personal-data-and-how-companies-use-it/#:~:text=Companies%20like%20Facebook%20and%20Google,based%20on%20a%20customer's%20personal), yet individuals have minimal say as to how their information is used, and that includes vulnerable groups like adolescents. This truly underscores the importance of data ownership.

One approach to enable greater control is [the idea of micropayments for data usage](https://www.nytimes.com/interactive/2019/09/23/opinion/data-privacy-jaron-lanier.html). Allowing users to be in the driver’s seat when they set permissions, and incentivising data sharing through small payments when their data is accessed, would really switch the dial. I think micropayments could be a real game changer when it comes to the future of data ownership as it restores a much-needed balance in terms of who controls what.

Although facing delays, the eRegulation has the right idea in limiting uncontrolled data usage and giving power back to users. The legislation is still slowly making its way through the legislative process and is one to keep an eye out for as it has the potential to work alongside the GDPR and ensure further ownership and control over data.

## <div id="blockchain">Blockchain and Data Ownership</div>

Now, how does blockchain fit into all of this? In short: it provides a novel approach to enable effective data ownership. Rather than one organisation or entity controlling data, blockchain offers a decentralised solution where many participants in a network can take part. As summarised in [Business Matters](https://bmmagazine.co.uk/business/blockchain-and-the-complexities-of-data-ownership/), data stored on a blockchain is dispersed among several blocks that form an immutable chain. Pretty straightforward right? The ledger is copied to all participants on the network to ensure that there is no centralised point, thus making it near-impossible to tamper with the information stored.[ ](http://)

My burning question was: How can data be both private and yet everyone has a copy of it? Well, to access the blockchain, each user in the network is assigned two cryptographic keys that are automatically generated. There is a public key that acts as a visible identifier, similar to a public mailbox. Then, there is a private key that proves a user’s identity and allows access to private information, like a key to said mailbox. This eliminates a centralised database, meaning there is no single point of failure and users have much more control and influence over their own data.

Governments are well aware of the positive implications. [In the World Economic Forum’s digital identify report](https://www3.weforum.org/docs/WEF_INSIGHT_REPORT_Digital%20Identity.pdf), it highlights Malta, Belgium, and several other private sector entities already utilising aspects of this technology.

Malta, for example, is testing the use of blockchain in the public sector through empowering educational institutions to issue degrees and other professional certifications and allowing students to access them from their smartphones. Private sector companies are also piloting decentralised frameworks using blockchain in areas such as banking, aviation, and insurance.

The relationship between data ownership and blockchain is also applicable to the public sector and businesses too. For example, the UK Government [published a report highlighting this very notion](https://assets.publishing.service.gov.uk/media/5a818d6fe5274a2e87dbe3dd/gs-16-1-distributed-ledger-technology.pdf):

> “Distributed ledger technologies have the potential to help governments to collect taxes, deliver benefits, issue passports, record land registries, assure the supply chain of goods and generally ensure the integrity of government records and services. In the NHS, the technology offers the potential to improve health care by improving and authenticating the delivery of services and by sharing records securely according to exact rules.”

The report goes on to highlight how businesses are incorporating ownership in a decentralised way:

> “Distributed ledgers can provide new ways of assuring ownership and provenance for goods and intellectual property. For example, Everledger provides a distributed ledger that assures the identity of diamonds, from being mined and cut to being sold and insured. In a market with a relatively high level of paper forgery, it makes attribution more efficient, and has the potential to reduce fraud and prevent ‘blood diamonds’ from entering the market.”

This underscores emerging opportunities for blockchain to be further integrated. A centralised system raises the stakes for inevitable failures and errors. Whereas, incorporating a decentralised system to manage both personal and business data will provide an increased level of security that has not been available thus far. Though, it doesn’t go without saying that decentralised systems aren’t completely immune from cyber-attacks of course – it is just much, much, harder.

Nor is this to say that blockchain itself is without challenges. One major one is what happens when a user loses access to their private key. Because private keys act as a password, if it gets lost for whatever reason, there is no way to recover the information stored on a block without it. Private keys come with long, random strings that can be extremely easy to forget if not stored properly. One of the major considerations will be to implement processes, whether it be on a government, business, or individual level, to ensure that private keys are kept safe.

The platform also requires quite a high level of digital literacy, which might make it inaccessible to a lot of individuals and organisations. Organisations are likely to need additional expertise as they begin to navigate complex, new systems and integrate them into workflows. This is where software development and integration firms, like [mintBlue](https://mintblue.com/), are invaluable. They provide the expertise to empower users to integrate the systems into their everyday workflow — certainly worth considering when new organisations are navigating the complexities of a new system.

## <div id="whats-next">What’s next?</div>

As we’ve explored, establishing frameworks around data ownership represents an urgent need when it comes to balancing innovation and privacy. As society becomes ever more integrated with the digital world, our personal information will hold more and more value. Putting individuals back in control of their data can no longer remain in question.

However, making the shift to empowering individuals to take control over their personal data necessitates broader public awareness and regulatory support from regulatory bodies such as the EU. Accessible resources pertaining to emerging tools, privacy rights, and regulations all while enabling decentralised control should be a major consideration as we move forward in the data-dominated world. Fostering multi-stakeholder collaborations and ensuring education initiatives are accessible will be key to driving things forward.

Organisations also play a pivotal role. Now is the time to champion these efforts through implementing new technologies, like blockchain, and keeping abreast of emerging regulations. While individuals are rapidly becoming more aware of their digital rights, there is a small window of opportunity for organisations to understand these changes and adapt. Failure to do so can cause repetitional damage, compliance issues, and ultimately risks leaving companies behind altogether. There is still time to be a leader in the world of data ownership, and my advice is not to leave it until it’s too late.
