---
template: BlogPost
path: /food-provenance/
date: 2024-01-09T10:17:00.886Z
title: "Food Provenance & Blockchain: Ensuring Integrity & Identity"
metaDescription: In-depth discussion of blockchain's potentials and risks in
  food provenance implementation. Includes use cases, notes on international
  recognition, and a primer on blockchain.
canonical: https://goodledger.io/food-provenance/
author: Sam Liddell
---

---

### Table of Contents

1. [How Blockchain Can Help Ensure Food Integrity and Identity](#ensuring-integrity-identity)
2. [The Importance of Ensuring Food Integrity & Identity](#food-integrity-importance)
3. [Blockchain's Food Provenance Promise](#blockchains-promise)
4. [Blockchain Explained](#blockchain-explained)
5. [Blockchain's Food Provenance Promise Internationally Recognised](#international-recognition)
6. [Blockchain Food Provenance Use Cases](#use-cases)
7. [The Other Side of the Coin: Blockchain's Challenges](#blockchains-challenges)
8. [Blockchain's Food Provenance Potential](#blockchains-potential)

---

## <div id="ensuring-integrity-identity">How Blockchain Can Help Ensure Food Integrity and Identity</div>

You’re sitting at the dinner table. You take your eating utensils — a fork or spoon, maybe a hand or chopsticks — and you insert a mouthful of \[insert your favourite food here]. Do you know where your food comes from? Do you know that it’s safe to eat? Do you know that it was ethically and sustainably produced? ... Do you actually care?

Maybe you would say: _"I got the vegetables from the organic grocer down the road. The meat came from the butcher, and the condiments are an accumulation of months (or years) of random supermarket trips."_

Okay, but where does the grocer get the veges? A... local farm? Or a factory in the Netherlands? Were they produced and harvested with love and care or were they the result of a hyper-efficient fossil-fuel-driven industrial process? With a raised eyebrow, you might ask: _"How would I know?"_

Since you're reading this, you probably do ask these questions and you most likely care about the answers. Some would say this is a luxury problem, and they wouldn’t be entirely wrong. For many, just getting food on the table is the challenge of the day. For others, concerns about dolphin safety, the rainforest, or pesticide-free products might be front of mind.

These potentially "luxury problems" have very real implications for those impacted by the outcomes. For those [battling pesticide-related cancers](https://pubmed.ncbi.nlm.nih.gov/36134639/); [the 155 million people affected by food shortages](https://www.weforum.org/agenda/2021/05/global-food-crises-report-conflict-2021/); those [sick from food-borne illnesses](https://www.fda.gov/food/consumers/what-you-need-know-about-foodborne-illnesses); or for the [rivers](https://theconversation.com/polluted-drained-and-drying-out-new-warnings-on-new-zealands-rivers-and-lakes-136486), [forests](https://wwf.panda.org/discover/knowledge_hub/where_we_work/amazon/amazon_threats/mechanized_agriculture/), and [animals quietly screaming for help](https://www.unep.org/news-and-stories/press-release/our-global-food-system-primary-driver-biodiversity-loss) — these are very real problems indeed, and something we will explore further.

## <div id="food-integrity-importance">The Importance of Ensuring Food Integrity & Identity</div>

How much insight does the average person have into what's on their plate? Do we know our dolphin-friendly tuna is _actually_ dolphin-friendly? How do we know if that chocolate bar just cost us a chunk of rainforest? Or if those harvesting the beans were fairly treated? Where would you look to find this information? And would you even trust this information if you could find it?

I'm sure no one wants to think about a dead dolphin when they're eating their sushi lunch. And I'm certain no one wants to enslave people or destroy a rainforest to satisfy their sweet tooth. But I'm also sure that the average consumer, wholesaler, and retailer don’t have the time or ability to research everything that comes across their plates or shelves.

The truth of the matter is: We (consumers) largely don't know where our food comes from, nor do we have practical ways of looking into this. We also don't know the true cost of our food — and depending on where you're living (and eating) — you might not know how safe your food is either. These problems apply up the chain too. Let's zoom in on some of these issues.

### Food Sustainability

Addressing the [sustainable supply of food represents one of the most substantial challenges](http://Addressingtheethicalandsustainablesupplyoffoodrepresentsoneofthemostsubstantialchallengeshumanityfaces.Thischallengeencompassesallaspectsofthesupplychain,spanningfromproductionandprocessingtodistribution,retailing,homepreparation,andwastemanagement.Theglobalfoodsystemisanotablecontributortogreenhousegasemissions,drivingclimatechange,anditadditionallyengenderssignificantenvironmentalrepercussions,includingthelossofbiodiversityandissuesrelatedtowaterextractionandpollution.) for humanity. Food sustainability encompasses all aspects of the supply chain — spanning from production and processing to distribution, retailing, consumption, and waste management.

The global food system is complex and has far reaching effects. It is a major contributor to greenhouse gas emissions, climate change, [the loss of biodiversity](https://www.theguardian.com/global-development/2019/feb/21/worlds-food-supply-under-severe-threat-from-loss-of-biodiversity), and is creating major [issues for our waterways](https://www.weforum.org/agenda/2022/11/water-food-supply-major-concern-countries-supply-chains/).

[WWF International Director General, Marco Lambertini](https://wwf.panda.org/wwf_news/?341451/World-first-revolutionary-blockchain-platform-empowers-all-to-track-environmental-and-ethical-impact-of-food-and-products) has said:

> _"Unsustainable production of food and goods is a major driver of environmental damage and some of the worst supply chains remain rife with human rights issues."_

One of our largest fresh food baskets is under serious threat. Our oceans are threatened by illegal overfishing, a big business — [encompassing up to 30% or more for catch of high-value species](https://www.worldwildlife.org/stories/overfishing-puts-more-than-one-third-of-all-sharks-rays-and-chimaeras-at-risk-of-extinction). Illegal overfishing [nets up to \$36.4 billion each year](https://www.worldwildlife.org/stories/overfishing-puts-more-than-one-third-of-all-sharks-rays-and-chimaeras-at-risk-of-extinction) for criminals, whilst putting more [than one-third of all sharks, rays, and chimeras at risk of extinction](https://www.worldwildlife.org/stories/overfishing-puts-more-than-one-third-of-all-sharks-rays-and-chimaeras-at-risk-of-extinction). These [illegal, unreported, and unregulated hauls](https://www.worldwildlife.org/threats/overfishing) move through opaque supply chains, traversing murky waters from illegal fishing trawlers through to (possibly unwitting) wholesalers and on to unsuspecting consumers all around the world.

### Food Security

Food and water are probably our most important resources. Ensuring the supply of these is essential to the security and survival of our species. This is a difficult problem to solve — even in the world's (arguably) most developed nation, the USA, [approximately 44 million people have difficulty getting enough food](https://www.npr.org/sections/health-shots/2023/10/26/1208760054/food-insecurity-families-struggle-hunger-poverty). For developing nations and regions faced with humanitarian disasters, the situation is even more dire.

Following Russia's invasion of Ukraine in 2022, the [World Bank made \$45 billion available to combat food security](https://www.worldbank.org/en/topic/agriculture/brief/food-security-update). This funding is estimated to help 335 million people across 90 countries ([which is still only 44% of undernourished people](https://www.worldbank.org/en/topic/agriculture/brief/food-security-update)). This shows the immense scale and severity of the problem — one that is only increasing due to global conflicts and environmental challenges.

The [World Bank's Vice President for Eastern and Southern Africa](https://www.worldbank.org/en/news/press-release/2022/06/21/world-bank-approves-2-3-billion-program-to-address-escalating-food-insecurity-in-eastern-and-southern-africa), Hafez Ghanem, has said:

> _"Ensuring regional coordination in addressing the challenges posed by climate change, market volatility, and the need for food policy reform constitute key priorities."_

Food is a global resource — [grain grown in Ukraine isn't only destined for Ukrainian dinner plates](https://www.weforum.org/agenda/2022/07/ukraine-s-food-exports-by-the-numbers/), and [tomatoes grown in Dutch factories aren't only destined for the Dutch market](https://www.washingtonpost.com/business/interactive/2022/netherlands-agriculture-technology/). Food is global, and the security of food is a global issue requiring large-scale regional coordination.

### Food Safety

Food safety is a global issue — [one in ten get sick from food-borne illnesses each year](https://www.who.int/en/news-room/detail/03-12-2015-who-s-first-ever-global-estimates-of-foodborne-diseases-find-children-under-5-account-for-almost-one-third-of-deaths) with an estimated [420,000 people dying as a result](https://www.who.int/en/news-room/detail/03-12-2015-who-s-first-ever-global-estimates-of-foodborne-diseases-find-children-under-5-account-for-almost-one-third-of-deaths). According to the [World Health Organisation](https://www.who.int/news-room/fact-sheets/detail/food-safety): "Food containing harmful bacteria, viruses, parasites or chemical substances causes more than 200 diseases, ranging from diarrhea to cancers. It also creates a vicious cycle of disease and malnutrition, particularly affecting infants, young children, the elderly, and the sick."

Collaboration between governments, food producers, and consumers is needed to help ensure food safety and stronger food systems.

[The World Health Organisations Director-General](https://www.who.int/news/item/03-12-2015-who-s-first-ever-global-estimates-of-foodborne-diseases-find-children-under-5-account-for-almost-one-third-of-deaths) has said:

> _"Knowing which food-borne pathogens are causing the biggest problems in which parts of the world can generate targeted action by the public, governments, and the food industry."_

Understanding the origins, quality, and ingredients of our food not only guides us towards safer food products, but it also enables us to identify when and where things go wrong — thereby providing accountability and leading us towards safer food for everyone.

### Food Fraud & Identification

Food identification, authenticity, and intellectual property (IP) are big business. [In the USA in 2017, 36 million pounds of imported corn and soybeans were fraudulently labeled organic.](https://www.washingtonpost.com/business/economy/the-labels-said-organic-but-these-massive-imports-of-corn-and-soybeans-werent/2017/05/12/6d165984-2b76-11e7-a616-d7c8a68c1a66_story.html)

Labels like "Organic" don’t just command a premium price, they signal that a [product adheres to specific guidelines](https://www.insider.com/guides/kitchen/what-does-organic-mean) and indicate values such as health and sustainability. Accurate food identification is important for economics and fair trade practices, but also for knowing what we're consuming.

Senior manager of the foods program at the U.S. Pharmacopeial Convention, [Kristie Laurvick, agrees](https://www.cnbc.com/2023/01/15/food-fraud-secretly-infiltrates-america-heres-how-you-can-avoid-it-.html):

> _"We might not know the overall impact of food fraud because so much of what fraudsters do is hidden from us and has been for centuries."_

This mislabeling and deceit is not only bad for legitimate businesses, but it misleads consumers and potentially exposes people to unsafe products. How much trust can we put on food labels? And how can we combat food fraud to ensure we know what we're putting on our plates and in our bodies?

## <div id="blockchains-promise">Blockchain's Food Provenance Promise</div>

### How the Hell is Blockchain Going to Help Us?

_Look author — how am I supposed to use blockchain to put food on the table?_ I hear you, dear reader.

When you tap your phone or swipe your card and the shopkeeper hands you your goods — do you know what happened behind the swipe or tap that resulted in that bag of goods being transferred to your hot little hands? Unless you're in banking, software, or systems integration, you probably don't know exactly what magic just happened — but you smile and say thank you, anyway.

You can use your phone to browse the internet and buy things online, yet you don't need to understand JavaScript (the programming language that makes the internet so awesome), RFID (radio signals), or SWIFT (the global payment network) to do so.

The same thing applies to blockchain — you don't need to fully understand the technology to use and benefit from it. But — because knowledge is power and we know you're a curious bunch — we will quickly try to explain it anyway.

## <div id="blockchain-explained">Blockchain Explained</div>

### What is Blockchain?

Blockchain is a digital ledger that records transactions (like a spreadsheet or book), but instead of a single bookkeeper or file, it's maintained by a network of computers that all contain a copy of the book (meaning it's not centrally controlled). Imagine it as a chain of containers (blocks), where each block contains a list of transactions. These blocks are linked together in chronological order, forming a chain of transactions.

Think of it as a public library where anyone can view and add to the library. Every transaction (entry into the library) is recorded with a timestamp and signature of who made the entry. Anyone can then go and inspect the transaction history. The entry (transaction) may include sending someone money (a token), it may include writing something in the ledger, or even just viewing some information in the book.

The most common type of activity on a blockchain is digital currencies like Bitcoin (BTC). Commonly referred to as crypto, these digital currencies have made headlines in the last few years, with the new "digital gold" being currently worth over half a trillion dollars.

There are hundreds of crypto tokens available across dozens of different blockchain networks. Crypto tokens like Bitcoin represent monetary value that can be traded between participants in the blockchain network. The information stored on the blockchain could be financial (like our digital currencies) but it could also be other information — [digital invoices](https://mintblue.com/einvoicing/), [supply chain movements](https://www2.deloitte.com/us/en/pages/operations/articles/blockchain-supply-chain-innovation.html), [event tickets](https://www.forbes.com/sites/forbesbusinesscouncil/2022/03/18/how-mobile-blockchain-ticketing-is-changing-the-events-industry/), [tokenised real-world assets](https://www.coindesk.com/learn/rwa-tokenization-what-does-it-mean-to-tokenize-real-world-assets/), or art[ in the form of digital media assets](https://time.com/5947720/nft-art/) like videos or images, amongst many other things.

This asset (or information) is forever stored on the blockchain. It can then be viewed, verified, and exchanged with each trade (transaction) being recorded forever, for all to see. This is something we're going to focus on to explain blockchain and its food provenance potential.

### Provenance by Design: Blockchain & NFT Art

While blockchain is probably most known for bringing us [Bitcoin](https://bitcoin.org/en/), another common blockchain use allows artists to upload an image to the blockchain, storing it forever as an "NFT" — giving it a unique Identifier that authenticates its authenticity, and allowing it to be sold to "art collectors" or speculating internet degenerates.

[NFTs (or non-fungible tokens)](https://edition.cnn.com/2021/03/17/business/what-is-nft-meaning-fe-series/index.html) are a type of digital asset that represents ownership or proof of authenticity, which is stored on a blockchain. NFTs are different from cryptocurrencies like Bitcoin or Ethereum, which can be exchanged on a one-to-one basis (fungible). NFTs, on the other hand, are unique and indivisible (non-fungible) — like a classic painting or a house.

NFTs can represent more than just a digital artwork (and the impressive prestige that comes with owning it). NFTs have a range of interesting use-cases — including other asset types or information that can be stored, exchanged, and tracked on a blockchain.

### Some common NFT examples include:

- [Tickets](https://cointelegraph.com/news/what-is-nft-ticketing-and-how-does-it-work) (that can unlock special access to things and prevent fraud)
- [Website domain names](https://coincentral.com/nft-domain-guide/) (that can be easily traded or linked to crypto wallets)
- [Physical assets like real-estate](https://cointelegraph.com/news/fractional-nfts-and-what-they-mean-for-investing-in-real-world-assets) (that can be divided into smaller pieces)
- [Memorabilia and collectibles](https://www.cnbc.com/2021/03/03/what-are-nfts-all-you-need-to-know-about-crypto-collectibles.html)
- [Virtual items like avatars, wearables](https://www.thefabricant.com/), or [online gaming assets](https://www.inverse.com/gaming/nfts-in-video-games-square-enix)
- [NFT digital invoices](https://docs.mintblue.com/nft-invoicing) (allowing time and cost savings through automation)
- [Digital identification](https://www.forbes.com/sites/forbestechcouncil/2022/02/23/blockchains-and-nfts-in-identification-and-security-protocols/) (for both online and real-world identification)

Much wow — maybe NFTs aren't just all hype! Celebrity artist Beeple recently [sold his "Everydays - The First 5000 Days" piece for a whopping \$69m at Christies](https://www.nytimes.com/2021/03/11/arts/design/nft-auction-christies-beeple.html). The art piece was stored on the blockchain as an NFT and helped bring NFT art from the corners of the internet and into the world's most prestigious auction house.

Similarly, [Picasso's piece Marie-Thérèse went for a whopping \$103m at Christies.](https://www.christies.com/lot/lot-pablo-picasso-1881-1973-femme-assise-pres-dune-6318426) This art piece is likely to sit in a museum or mansion somewhere, before possibly changing hands to a mysterious private buyer in the future.

Both of these sales represent the purchase of an asset with an agreed-upon value — but there are some stark differences. How do we know the art is genuine? How do we verify who created it? And who may have owned it along the way? These are important questions for determining an art piece's legitimacy (and value).

With the Picasso, we would probably need to hire an expensive forensics team and some art historians to inspect the piece. With the \$69m NFT, we can simply jump on the internet and [look at the wallet (account)](https://etherscan.io/address/0xc6b0562605d35ee710138402b878ffe6f2e23807). We can then see the entire transaction history for the account, including the original transaction that created the NFT and any transactions since. _This is the inherent provenance provided by assets stored on a blockchain._ Blockchain's transparent public ledger allows us to identify the owner, verify its authenticity, and provides full transparency of the movements of the asset.

By now, you're probably starting to get an idea of where we're going with this. Let's take a look at the high level support blockchain is receiving, some real-world examples, and criticisms of blockchain in the food supply chain.

## <div id="international-recognition">Blockchain's Food Provenance Promise Internationally Recognised</div>

International organisations have recognised the importance of blockchain as a tool for helping combat food-related issues. Organisations including the [United Nations](https://www.undp.org/blog/realizing-blockchains-potential-social-impact), [The World Economic Forum](https://www.weforum.org/agenda/2022/09/could-blockchain-help-track-outbreaks-like-e-coli-in-spinach/), and the [European Innovation Council](https://digital-strategy.ec.europa.eu/en/news/commissions-european-innovation-council-awards-eu5-million-blockchain-solutions-social-innovations) have all commented on blockchain's potential for the food supply chain.

The [European Innovation Council](https://www.bitcoininsider.org/article/89523/european-innovation-council-awards-5m-six-blockchain-projects) [awarded €1m to London-based Provenance](https://digital-strategy.ec.europa.eu/en/news/commissions-european-innovation-council-awards-eu5-million-blockchain-solutions-social-innovations) so businesses can prove their social impact across the supply chains that support their businesses and products.

They have successfully tested blockchain-based solutions on the Indonesian tuna supply chain — one of the most controversial in the world. The EIC award-winning project involves fishermen sending an SMS message after each catch — giving it a digital ID from the point of origin, that then enables it to be tracked through the supply chain until it reaches Japanese restaurants. Scaled further, the technology can verify ethical claims and help enforce labor and environmental standards.

[The UN's Tatsiana Hulko has recognised blockchain's potential for social impact](https://www.undp.org/blog/realizing-blockchains-potential-social-impact):

> _"From helping those with limited access to bank accounts to tracking tuna – the applications are broad."_

[The World Economic Forum](https://www.weforum.org/agenda/2022/09/could-blockchain-help-track-outbreaks-like-e-coli-in-spinach/) has also agreed:

> _"Blockchain's ability to capture data along the supply chain makes it a fast and efficient way to pinpoint where contamination or other safety issues may have originated."_

## <div id="use-cases">Blockchain Food Provenance Use Cases</div>

### How Blockchain is Helping Eradicate Slavery in the Chocolate Industry

Amsterdam-based chocolate company [Tony's Chocolonely](https://tonyschocolonely.com/int/en) is on a mission to eradicate slavery in the chocolate industry by making chocolate 100% slave-free — not just within its operations, but throughout the global chocolate supply chain.

To combat this, [Tony's Chocolonely developed a platform called Beantracker](https://tonyschocolonely.com/us/en/our-mission/serious-cocoa-info/tonys-beantracker) which digitally traces the journey of cocoa beans from the source to the final chocolate bar. Their goal is for Beantracker to become an industry standard, allowing all chocolate companies to join the fight against modern slavery in the sector.

They have also collaborated with the world's largest cocoa processor, Barry Callebaut, to promote traceability and ethical practices in the industry. Despite the hype surrounding blockchain's potential for traceability, the challenges of data uploading, tracking physical goods, and ensuring connectivity in cocoa supply chains make its mainstream adoption a few years away.

### How Blockchain is Providing Traceability for the World Wildlife Fund (WWF)

Global supply chains are intricate and sprawling, involving countless producers, processors, and importers. The absence of traceability in these chains can not only jeopardize a company's reputation but can also pose safety risks to consumers. Incidents like [food recalls](https://www.nbcnews.com/health/health-news/romaine-lettuce-e-coli-outbreak-traced-california-farm-n947731), [reports of slave labor](https://www.nytimes.com/2015/07/27/world/outlaw-ocean-thailand-fishing-sea-slaves-pets.html), [illegal deforestation](https://www.nytimes.com/2017/02/24/business/energy-environment/deforestation-brazil-bolivia-south-america.html), and unregulated fishing highlight the urgent need for transparency.

WWF and BCG Digital Ventures are launching a revolutionary [digital platform called OpenSC](https://wwf.panda.org/wwf_news/?341451/World-first-revolutionary-blockchain-platform-empowers-all-to-track-environmental-and-ethical-impact-of-food-and-products) that uses blockchain and other technologies to track food and products — helping people and businesses to avoid illegal, environmentally damaging, or unethical goods.

> _"OpenSC gives consumers the power to track their purchases from source to store, enabling them to buy and importantly, demand sustainable and ethical, fair products from companies. OpenSC is a game-changer, massively increasing transparency and accountability,"_ said Marco Lambertini, [WWF International Director General](https://wwf.panda.org/wwf_news/?341451/World-first-revolutionary-blockchain-platform-empowers-all-to-track-environmental-and-ethical-impact-of-food-and-products).

Blockchain can offer more than just traceability — it can enhance supply chain management and reduce operating costs. With improved transparency, companies can expedite product recalls at a lower expense. A [report by Accenture](https://www.accenture.com/t20190115T192110Z__w__/us-en/_acnmedia/PDF-93/Accenture-Tracing-Supply-Chain-Blockchain-Study-PoV.pdf#zoom=50) underscores that blockchain has the potential to spark a transparency revolution in the global food system.

[BCGDV Managing Director and Co-Chair of the WEF Council on the Future of Consumption,](https://wwf.panda.org/wwf_news/?341451/World-first-revolutionary-blockchain-platform-empowers-all-to-track-environmental-and-ethical-impact-of-food-and-products) agrees:

> _"OpenSC is fantastic for businesses that are committed to sustainable and ethical operations. In addition to providing transparency about the origin of an item’s production, OpenSC helps optimise business supply chain operations, reduces costs, and enables producers to manage issues such as product recalls."_

### How Blockchain is Helping Identify Chinese Chickens as Organic (or Not)

[GoGo Chicken](https://sea.mashable.com/tech/2478/a-chinese-company-is-gps-tracking-your-chicken-to-ensure-theyre-healthy-and-organic), a [poultry monitoring technology based on blockchain and location-tracking](https://www.weforum.org/agenda/2021/01/china-digital-agriculture-global-food-security/), was developed to track chickens to prove whether they are organic. Each chicken wears a tracking device on its foot which automatically uploads its real-time progress through the supply chain to the blockchain database. Sensors monitor temperature, humidity, and other aspects of the chickens' environment, while algorithms evaluate the bird's health using video analysis. This public record could help consumers to identify the source and legitimacy of the labels on their food.

### How Blockchain is Helping Walmart Seek the "Holy Grail of Food Traceability"

To protect themselves and their customers, Walmart has been promoting blockchain as a novel method for tracing perishable foods such as leafy greens as they travel through the supply chain. In 2017, [Walmart announced a blockchain partnership with IBM](https://d3.harvard.edu/platform-rctom/submission/walmart-and-block-chain-it-takes-two-to-mango/) and a consortium of other food supply chain players including industry giants Nestlé and Unilever.

Walmart performed two trials where they tracked pork in China and mangos in Mexico — storing food safety processes and product info on the blockchain — creating a single historical record for the food. [The trials reduced the time to track information from one week to 2.2 seconds](https://www.ibm.com/blogs/blockchain/2017/06/the-food-industry-gets-an-upgrade-with-blockchain/). In an industry with [over 500 food recalls annually in the U.S.](https://www.statista.com/statistics/947646/number-of-usda-food-recalls-us/) and [\$10-15 billion annually spent on food safety incidents](https://www-01.ibm.com/events/wwe/grp/grp308.nsf/vLookupPDFs/6%20Using%20Blockchain%20for%20Food%20Safe%202/$file/6%20Using%20Blockchain%20for%20Food%20Safe%202.pdf), this offers large financial and operational implications.

### How Blockchain is Ensuring Everyone Gets Fed in Times of Need

In [Jordan's Azraq refugee camp](https://venturebeat.com/entrepreneur/social-good-innovators-bet-on-blockchains-to-solve-big-problems/), 10,000 refugees are involved [in a World Food Program project](https://www.wfp.org/news/news-release/blockchain-against-hunger-harnessing-technology-support-syrian-refugees) that uses retina scans and blockchain-based transaction logs to track food distributions in multiple locations, boosting efficiency, preventing fraud, and ensuring everyone gets fed.

## <div id="blockchains-challenges">The Other Side of the Coin: Blockchain's Challenges</div>

According to [Accenture's new report](https://www.accenture.com/us-en/insights/blockchain-index) titled "Tracing the Supply Chain: How Blockchain Can Enable Traceability in the Food Industry," _using the technology well_ — takes careful planning and wide collaboration.

As we've explored, the food supply chain is vast and complex. It involves an incredible amount of collaboration and is as diverse a system as any other. Ensuring alignment and adherence to guidelines by industry stakeholders, producers, financial institutions, governments, and consumers is a huge challenge.

International organisations like the UN and WEF could help to enforce participation and adherence, but again — this is also not without controversy. Even the [WEF's research](https://www.weforum.org/agenda/2022/09/could-blockchain-help-track-outbreaks-like-e-coli-in-spinach/) suggests there are concerns about how the technology could be used to maximise profitability at the expense of farmers, leading to more supply chain problems.

Of course, there is blockchain's energy use concern — which we have addressed in detail in [this article here](https://goodledger.io/blockchain-for-social-good/). We believe this narrative is misguided when examining the potential of blockchain as a force for social good — as the energy use (and costs) are dependent on the blockchain protocol and implementation chosen.

![Graphic by Boston Consulting Group about blockchain's opportunities & risks](/assets/bcg-blockchain.png "The Opportunities and Risks in Traceability Along the Supply Chain")

_Image source: https://www.bcg.com/publications/2021/food-traceability_

This [report by BCG](https://www.bcg.com/publications/2021/food-traceability) comparing the pros and cons of implementing traceability in the food supply raises some good points too:

- Commercial sensitivities and privacy concerns resulting from such levels of transparency.
- The inability of smaller producers to implement a solution and compete — resulting in reduced supplier diversity and competition.
- System vulnerabilities like availability and quality of data, hardware connectivity, and software latency/internet issues.
- The ability for large organisations to implement standards that steer the direction in certain people's favour. Money talks.

Ultimately, knowledge, funding, and systems shortcomings could all create technical barriers to entry for some players. While it's still early days for blockchain, we remain optimistic despite the concerns and challenges of implementing blockchain in the food supply chain.

## <div id="blockchains-potential">Blockchain's Food Provenance Potential</div>

So dear reader... Do you care what’s on the label? Are you curious about how your food was produced? Where it came from? Are you concerned about its safety or about potential environmental or social impacts it may have had along the way?

The implications of ignoring the above questions should now be clear. The problems associated with these questions are real and far-reaching. Maybe not for you right now — but they are an immediate concern for many right now, and if ignored, the implications might effect everyone.

Blockchain's potential for reduced food costs and improved access, more efficient product recalls and safer food, increased transparency and sustainable supply chains, ethical labor practices, and greater control and clarity into our food supply — are all tempting promises.
