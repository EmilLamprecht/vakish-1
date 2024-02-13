---
template: BlogPost
path: /blockchain-identity-authentication/
date: 2024-01-09T11:03:38.088Z
title: "Identity Authentication: How Blockchain Puts Users In Control"
metaDescription: "Overview of identity authentication: what it is, how it works,
  what EU policies are relevant, and how blockchain might fit into the
  equation."
author: Rachel Byfleet
canonical: https://policyblocks.co/blockchain-identity-authentication/
---

---

### Table of Contents

1. [Importance of Identity Authentication](#importance)
2. [Enhancing Identity Authentication](#enhancing)
3. [Emerging Identity Authentication Policies](#emerging-policies)
4. [The Future of Blockchain & Identity Authentication](#future)
5. [Conclusion: Where Does That Leave Us?](#conclusion)

---

## <div id="importance">Importance of Identity Authentication</div>

Proving who you claim to be online is becoming more and more complicated. Whether it be accessing social media or finances, many aspects of everyday life are now taking place online — which is why protecting your online identity is more important than ever before.

It's likely we've all been through many, _many_ security trainings that encourage us to pick safe passwords, enable two-factor authentication, or answer absurd security questions like, _'What was is the name of your grandmother's childhood dog?'_ And while I am admittedly the first person to have a short fuse when my phone doesn't immediately recognise me with my glasses on, the authentication process is key to ensuring our online identity is protected and maintained.

Businesses and customers have a shared interest when it comes to identity authentication. Customers deserve the peace of mind that their personal information is kept safe, just as businesses need to know exactly who they're dealing with, and in what capacity. But, as methods for identity authentication advance, so do the capabilities of hackers trying to steal information.

Now, an important distinction to make is the difference between digital identity and identity authentication. Your digital identity includes all online information about you — think name, accounts, email address, the list goes on. But your digital identity doesn't confirm or authenticate that you are the owner of any of this information. That's the purpose of identity authentication — in short, when you confirm your digital identity through using a password or biometrics to validate your digital identity.

All of this is relevant because, as I mentioned, it is increasingly important to safeguard this information. And this is where blockchain can come in. Blockchain is a promising technology that can help create more user-controlled, secure digital identities and authentication processes. However, adoption is not yet mature enough to do so — there needs to be a collective effort to make it more mainstream and user-centric.

My goal in this article is to explain the relationship between blockchain and identity authentication, analyse relevant policies, and explore what the future could look like.

## <div id="enhancing">Enhancing Identity Authentication</div>

A key advantage of blockchain is the decentralised aspect that avoids one central database that can be susceptible to data breaches. It instead utilises decentralised identifiers (DIDs).

DIDs are a cryptographic key pair that allows users to have more control over their online identity. DIDs are becoming more popular, with [Forbes claiming they're the future of online identity.](https://www.forbes.com/sites/williamanderson/2023/03/15/dids-on-the-blockchain-how-decentralized-identifiers-are-the-future-of-online-identity/) To explain what these are, I'll start by explaining what they are not.

In most cases, you’re likely to interact with a centralised identifier such as an email address or username and password on whatever platform you want to access. This allows a centralised database to store your digital information on that platform. The obvious downfalls of this model are that these are more vulnerable to data breaches and that users are left without any control over the data. When we use centralised platforms, we really hand over all of our trust to whatever platform we’re using.

DIDs provide a new way to access information while allowing users to maintain ownership. They are made up of a set of unique numbers, and to avoid getting into the very nitty gritty of it all, I’ve included an image from W2C that helps give a bit more context as to what they actually look like.

![W2C decentralised identifier (DID) demonstration](/assets/w2c-did.svg "Decentralised IDentifier (DID)")

_Image source: https://www.w3.org/TR/did-core/_

If you read [my last article on data ownership](https://policyblocks.co/data-ownership/), you'll know I gave a brief overview of public and private keys. DIDs use the same model. They allow a user access to interact with specific parts of a blockchain network to manage their identity and data sharing preferences.

More specifically, the DID public key allows users to receive encrypted messages or digitally sign or verify their information. The private key proves ownership of the identity and allows the user to decrypt messages. Together, the keys allow users to disclose certain aspects of their identity associated with their DID in a secure way.

This is all well and good in theory, but what does this actually look like in the real world? Well we're starting to see DID capabilities in healthcare and financial applications, but this is only the beginning. I'll give you some examples.

### Healthcare

[](http://)The healthcare sector offers a lot of opportunity to integrate identity authentication to access electronic health records and other sensitive information. Startup [SimplyVital Health](https://www.forbes.com/sites/jessedamiani/2017/11/06/simplyvital-health-blockchain-revolutionize-healthcare/?sh=6e6a9626880a) developed its own electronic health record system, Health Nexus, that utilised Health IDs to increase secure access to health records across multiple sites. It developed a built-in key pair system that allows users to give access to their healthcare data through permissioned keys. This means users can give specific access to their data across multiple providers while maintaining consent rights and avoiding broken data trails.

Another player in this space is [Medicalchain](https://medicalchain.com/en/#:~:text=A%20Smart%20Medical%20Ecosystem&text=Medicalchain%20uses%20blockchain%20technology%20to,collaborative%2C%20smart%20approach%20to%20healthcare.). Similar to SimplyVital Health, this company allows patients to share their records with research initiatives or sell their data — all while staying in control of who can access their information. The company emphasises that patients won't be able to edit their own records but rather view them and decide who else can view them too. Only licensed practicing doctors are allowed on Medicalchain's private blockchain to alter records but patients can control visibility.

Both of these companies have paved the way for users to retain control through decentralised identity consent processes.

### Finance

Another area where identity authentication comes into play is in the financial sector. Invoice fraud is a major threat to accounting platforms, but blockchain-based-e-invoicing can help verify invoices and mitigate risks. For example, accounting platform VISMA | yuki selected blockchain infrastructure provider [mintBlue](https://mintblue.com/visma-yuki-blockchain/) to incorporate blockchain into its platform. This guarantees a secure ecosystem through making sure all invoices are secure, transaction logs are unchangeable, and records are matched automatically.

Through automatically verifying invoices, the integration saves the company time and effort it would have spent through manual verification. While automation isn't necessarily new, ensuring it's done on a decentralised platform is. Without a centralised entity modifying transactions, accountability and transparency improve tremendously.

> "You already see these initiatives in the market. Only the data and the revenue model always lie with an external party. With the blockchain, you don’t have these limitations, and you always remain the owner of your data. Even if the companies around it were to disappear."<br>— _[Niels van den Bergh, CEO mintBlue](https://mintblue.com/visma-yuki-blockchain/)_

Blockchain also can do more than just help with practicalities in the financial sector. It has the potential to combat instances of fraud or tax evasion too. Through using this technology, companies could make digital paper trails directly available to tax authorities, allowing them to audit at any time and making it much harder to have two sets of books.

There are many sectors dipping their toes into using blockchain to enhance identity authentication. The decentralised ideology is attractive for businesses and individuals alike. This is a truly exciting time for this technology to take hold and the future looks bright as blockchain continues to mature.

## <div id="emerging-policies">Emerging Identity Authentication Policies</div>

### eIDAS regulation

As identity management progresses, the EU is recognising the importance of supporting the infrastructure. Initiatives such as [the regulation on electronic identification and trust services for electronic transactions in the internal market (eIDAS regulation)](https://digital-strategy.ec.europa.eu/en/policies/eidas-regulation) provide a legal framework for electronic interactions within the EU. The regulation aims to increase security on electronic identification and transactions, promote cross-border transactions through using electronic identification (eIDs), and provide greater security.

The idea is that citizens will use eIDs that allow both businesses and citizens to easily identify themselves online for transactions within the EU. It also aims to set up rules for things like e-signatures and electronic seals to help add to the authentication process.

One of the ways eIDAS and blockchain potentially overlap is through e-signatures and [smart contracts.](https://www.investopedia.com/terms/s/smart-contracts.asp) This is already happening with companies promoting blockchain integration to smart contracts, while ensuring they both comply with and are recognised by eIDAS. Combining this regulation with blockchain has the power to create an even more secure and effective solution for digital authentication.

### EU Digital Identity

The [EU Digital Identity](https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/european-digital-identity_en) allows EU citizens to confirm their identity across the EU. This is all part of the EU's effort to move toward the [Digital Decade 2030](https://digital-strategy.ec.europa.eu/en/policies/europes-digital-decade) and digitalise public services.

> "Every time an App or website asks us to create a new digital identity or to easily log on via a big platform, we have no idea what happens to our data in reality. That is why the Commission will propose a secure European e-identity. One that we trust and that any citizen can use anywhere in Europe to do anything from paying your taxes to renting a bicycle. A technology where we can control ourselves what data is used and how."<br>— _[Ursula von der Leyen, President of the European Commission](https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/european-digital-identity_en#:~:text=Every%20time%20an%20App%20or,a%20secure%20European%20e%2Didentity.)_

As part of this initiative, large platforms such as Meta or Amazon will be legally required to authenticate identities and users must accept a EU Digital Identity Wallet to log in. However, there is an obvious balancing act needed between security and privacy online. The idea of big tech companies authenticating identities raises concerns about the role privacy, anonymity, and the potential surveillance of online activity have to play. It is important for control to remain in the users' hands — that they maintain the right to control how much they share on big platforms.

Blockchain could be the solution to turn the Digital Identity Wallet into reality. The Wallet is set to hold a variety of digital documents including medical information and country identification (such as a driver's license). It has potential to put users first by allowing them to decide what and how they want to share their data. But as mentioned, it is essential the Wallet considers privacy and the role of anonymity. The decentralised aspect of blockchain could help combat these concerns and help make the Wallet more secure and appealing to users.

## <div id="future">The Future of Blockchain & Identity Authentication</div>

While innovations like the EU Digital Identity Wallet appear to be futuristic and exciting (at least to me!), I know it would make certain people, like my parents for example, feel very left behind. And it's not just them — according to the EU, 32% of [all Europeans still lack basic digital skills](https://data.europa.eu/en/publications/datastories/digital-literacy-eu-overview#:~:text=Currently%2C%20more%20than%2090%20%25%20of,still%20lack%20basic%20digital%20skills.) and it heavily impacts older people. Germany, for example, scores below the EU digital literacy average alongside countries like Italy, Hungary, and Poland.

The EU sets out to address digital literacy in its [Digital Education Action Plan](https://education.ec.europa.eu/focus-topics/digital-education/action-plan), but it is clear that digital literacy must increase to support new technology in this space or it will leave many unprepared for new tools.

That being said, identity authentication and blockchain technology don’t have to be complex topics. They can be easy-to-use in practice, but need intuitive platforms and simple user experiences. Incentivisation schemes will also be key to help motivate businesses and users alike to upskill and increase digital literacy.

Using education alongside policies to improve digital literacy will help increase adoption of new technologies and allow for further innovation in this space.

## <div id="conclusion">Where Does That Leave Us?</div>

It's no secret that it’s becoming harder and more complicated to prove who you are online. Blockchain could be a natural fit with emerging EU regulations and has the potential to give users even more control over their data.

The EU's policies have provided a strong foundation for integrating blockchain, and, if included in regulations early, it can start to become more widespread. There is a long way to go before many of us feel confident understanding things like DIDs, but by incorporating blockchain into initiatives such as the EU Digital Identity Wallet, blockchain can become better known and understood.

Moreover, it is essential for emerging regulations to find the balance between digital privacy and authentication, otherwise they run the risk of all emerging policies being rejected by citizens who value anonymity. With the right combination of both, EU citizens can claim back control over their online identity — now, and in the future.
