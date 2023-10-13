------
เค้าโครง: ค่าเริ่มต้น
---

# มีส่วนร่วมในคู่มือโอเพ่นซอร์ส

ขอขอบคุณที่ตรวจสอบ Open Source Guides! เรารู้สึกตื่นเต้นที่จะได้ยินและเรียนรู้จากคุณ ประสบการณ์ของคุณจะเป็นประโยชน์ต่อผู้อื่นที่อ่านและใช้คำแนะนำเหล่านี้

เราได้รวบรวมหลักเกณฑ์ต่อไปนี้เพื่อช่วยให้คุณทราบว่าส่วนใดจะเป็นประโยชน์ได้ดีที่สุด

## สารบัญ

0. [ประเภทของการมีส่วนร่วมที่เรากำลังมองหา](#types-of-contributions-were-looking-for)
0. [กฎพื้นฐานและความคาดหวัง](#ground-rules--expectations)
0. [วิธีการมีส่วนร่วม](#วิธีการมีส่วนร่วม)
0. [คำแนะนำสไตล์](#style-guide)
0. [การตั้งค่าสภาพแวดล้อมของคุณ](#setting-up-your-environment)
0. [ชุมชน](#ชุมชน)

## ประเภทของการมีส่วนร่วมที่เรากำลังมองหา

คุณสามารถสนับสนุนคำแนะนำได้โดยตรงหลายวิธี (ตามลำดับความจำเป็นจากมากไปน้อย):

* แก้ไขความไม่สอดคล้องกันของบรรณาธิการหรือความไม่ถูกต้อง
* [แปลคำแนะนำเป็นภาษาอื่น](docs/translations.md)

สนใจที่จะมีส่วนร่วมในคู่มือโอเพ่นซอร์สนี้หรือไม่? อ่านต่อ!

## กฎพื้นฐานและความคาดหวัง

ก่อนที่เราจะเริ่มต้น ต่อไปนี้คือบางสิ่งที่เราคาดหวังจากคุณ (และที่คุณควรคาดหวังจากผู้อื่น):

* มีน้ำใจและมีน้ำใจในการสนทนาเกี่ยวกับโครงการนี้ เราทุกคนมาจากภูมิหลังและโครงการที่แตกต่างกัน ซึ่งหมายความว่าเราอาจมีมุมมองที่แตกต่างกันเกี่ยวกับ "วิธีการทำงานของโอเพ่นซอร์ส" พยายามฟังผู้อื่นแทนที่จะโน้มน้าวพวกเขาว่าแนวทางของคุณถูกต้อง
* คู่มือ Open Source ได้รับการเผยแพร่พร้อมกับ [หลักปฏิบัติของผู้ร่วมให้ข้อมูล](./CODE_OF_CONDUCT.md) การเข้าร่วมโครงการนี้แสดงว่าคุณตกลงที่จะปฏิบัติตามข้อกำหนดของโครงการ
* โปรดตรวจสอบให้แน่ใจว่าการมีส่วนร่วมของคุณผ่านการทดสอบทั้งหมดหากคุณเปิดคำขอดึง หากมีความล้มเหลวในการทดสอบ คุณจะต้องแก้ไขปัญหาเหล่านั้นก่อน เราจึงจะสามารถรวมการสนับสนุนของคุณได้
* เมื่อเพิ่มเนื้อหาโปรดพิจารณาว่ามีคุณค่าอย่างกว้างขวางหรือไม่ โปรดอย่าเพิ่มข้อมูลอ้างอิงหรือลิงก์ไปยังสิ่งที่คุณหรือนายจ้างของคุณสร้างขึ้น เนื่องจากบุคคลอื่นจะทำเช่นนั้นหากพวกเขาเห็นคุณค่า

## วิธีการมีส่วนร่วม

หากต้องการมีส่วนร่วม ให้เริ่มด้วยการค้นหาใน[คำขอดึง](https://github.com/github/opensource.guide/pulls) เพื่อดูว่ามีคนอื่นหยิบยกแนวคิดหรือคำถามที่คล้ายกันหรือไม่

หากคุณไม่เห็นแนวคิดของคุณอยู่ในรายการ และคุณคิดว่าแนวคิดนั้นสอดคล้องกับเป้าหมายของคู่มือนี้ ให้เปิดคำขอดึง

## คู่มือสไตล์

หากคุณกำลังเขียนเนื้อหา โปรดดู [คำแนะนำสไตล์](./docs/styleguide.md) เพื่อช่วยให้ร้อยแก้วของคุณตรงกับคำแนะนำที่เหลือ

## การตั้งค่าสภาพแวดล้อมของคุณ

ไซต์นี้ขับเคลื่อนโดย [Jekyll](https://jekyllrb.com/) การใช้งานบนเครื่องของคุณจำเป็นต้องมีการติดตั้ง [Ruby](https://www.ruby-lang.org/en/) ด้วย [Bundler](https://bundler.io/) ที่ใช้งานได้

เมื่อคุณตั้งค่าแล้ว:

1. ให้สิทธิ์ดำเนินการแก่สคริปต์:

``` ทุบตี
chmod +x สคริปต์/บูตสแตรป
chmod +x สคริปต์/เซิร์ฟเวอร์
```

2. รันสคริปต์:

``` ทุบตี
./script/bootstrap
./สคริปต์/เซิร์ฟเวอร์
```

…และเปิด <http://localhost:4000> ในเว็บเบราว์เซอร์ของคุณ

## ชุมชน

การสนทนาเกี่ยวกับ Open Source Guides เกิดขึ้นใน [ปัญหา](https://github.com/github/opensource.guide/issues) และ [Pull Requests](https://github.com/github/opensource.guide) ของพื้นที่เก็บข้อมูลนี้ /pulls) ส่วน ใครก็ตามสามารถเข้าร่วมการสนทนาเหล่านี้ได้

หากเป็นไปได้ อย่านำการสนทนาเหล่านี้ไปใช้ช่องทางส่วนตัว รวมทั้งติดต่อกับผู้ดูแลโดยตรง การทำให้การสื่อสารเป็นแบบสาธารณะหมายความว่าทุกคนจะได้รับประโยชน์และเรียนรู้จากการสนทนา
layout: ---
เค้าโครง: ค่าเริ่มต้น
---

# มีส่วนร่วมในคู่มือโอเพ่นซอร์ส

ขอขอบคุณที่ตรวจสอบ Open Source Guides! เรารู้สึกตื่นเต้นที่จะได้ยินและเรียนรู้จากคุณ ประสบการณ์ของคุณจะเป็นประโยชน์ต่อผู้อื่นที่อ่านและใช้คำแนะนำเหล่านี้

เราได้รวบรวมหลักเกณฑ์ต่อไปนี้เพื่อช่วยให้คุณทราบว่าส่วนใดจะเป็นประโยชน์ได้ดีที่สุด

## สารบัญ

0. [ประเภทของการมีส่วนร่วมที่เรากำลังมองหา](#types-of-contributions-were-looking-for)
0. [กฎพื้นฐานและความคาดหวัง](#ground-rules--expectations)
0. [วิธีการมีส่วนร่วม](#วิธีการมีส่วนร่วม)
0. [คำแนะนำสไตล์](#style-guide)
0. [การตั้งค่าสภาพแวดล้อมของคุณ](#setting-up-your-environment)
0. [ชุมชน](#ชุมชน)

## ประเภทของการมีส่วนร่วมที่เรากำลังมองหา

คุณสามารถสนับสนุนคำแนะนำได้โดยตรงหลายวิธี (ตามลำดับความจำเป็นจากมากไปน้อย):

* แก้ไขความไม่สอดคล้องกันของบรรณาธิการหรือความไม่ถูกต้อง
* [แปลคำแนะนำเป็นภาษาอื่น](docs/translations.md)

สนใจที่จะมีส่วนร่วมในคู่มือโอเพ่นซอร์สนี้หรือไม่? อ่านต่อ!

## กฎพื้นฐานและความคาดหวัง

ก่อนที่เราจะเริ่มต้น ต่อไปนี้คือบางสิ่งที่เราคาดหวังจากคุณ (และที่คุณควรคาดหวังจากผู้อื่น):

* มีน้ำใจและมีน้ำใจในการสนทนาเกี่ยวกับโครงการนี้ เราทุกคนมาจากภูมิหลังและโครงการที่แตกต่างกัน ซึ่งหมายความว่าเราอาจมีมุมมองที่แตกต่างกันเกี่ยวกับ "วิธีการทำงานของโอเพ่นซอร์ส" พยายามฟังผู้อื่นแทนที่จะโน้มน้าวพวกเขาว่าแนวทางของคุณถูกต้อง
* คู่มือ Open Source ได้รับการเผยแพร่พร้อมกับ [หลักปฏิบัติของผู้ร่วมให้ข้อมูล](./CODE_OF_CONDUCT.md) การเข้าร่วมโครงการนี้แสดงว่าคุณตกลงที่จะปฏิบัติตามข้อกำหนดของโครงการ
* โปรดตรวจสอบให้แน่ใจว่าการมีส่วนร่วมของคุณผ่านการทดสอบทั้งหมดหากคุณเปิดคำขอดึง หากมีความล้มเหลวในการทดสอบ คุณจะต้องแก้ไขปัญหาเหล่านั้นก่อน เราจึงจะสามารถรวมการสนับสนุนของคุณได้
* เมื่อเพิ่มเนื้อหาโปรดพิจารณาว่ามีคุณค่าอย่างกว้างขวางหรือไม่ โปรดอย่าเพิ่มข้อมูลอ้างอิงหรือลิงก์ไปยังสิ่งที่คุณหรือนายจ้างของคุณสร้างขึ้น เนื่องจากบุคคลอื่นจะทำเช่นนั้นหากพวกเขาเห็นคุณค่า

## วิธีการมีส่วนร่วม

หากต้องการมีส่วนร่วม ให้เริ่มด้วยการค้นหาใน[คำขอดึง](https://github.com/github/opensource.guide/pulls) เพื่อดูว่ามีคนอื่นหยิบยกแนวคิดหรือคำถามที่คล้ายกันหรือไม่

หากคุณไม่เห็นแนวคิดของคุณอยู่ในรายการ และคุณคิดว่าแนวคิดนั้นสอดคล้องกับเป้าหมายของคู่มือนี้ ให้เปิดคำขอดึง

## คู่มือสไตล์

หากคุณกำลังเขียนเนื้อหา โปรดดู [คำแนะนำสไตล์](./docs/styleguide.md) เพื่อช่วยให้ร้อยแก้วของคุณตรงกับคำแนะนำที่เหลือ

## การตั้งค่าสภาพแวดล้อมของคุณ

ไซต์นี้ขับเคลื่อนโดย [Jekyll](https://jekyllrb.com/) การใช้งานบนเครื่องของคุณจำเป็นต้องมีการติดตั้ง [Ruby](https://www.ruby-lang.org/en/) ด้วย [Bundler](https://bundler.io/) ที่ใช้งานได้

เมื่อคุณตั้งค่าแล้ว:

1. ให้สิทธิ์ดำเนินการแก่สคริปต์:

``` ทุบตี
chmod +x สคริปต์/บูตสแตรป
chmod +x สคริปต์/เซิร์ฟเวอร์
```

2. รันสคริปต์:

``` ทุบตี
./script/bootstrap
./สคริปต์/เซิร์ฟเวอร์
```

…และเปิด <http://localhost:4000> ในเว็บเบราว์เซอร์ของคุณ

## ชุมชน

การสนทนาเกี่ยวกับ Open Source Guides เกิดขึ้นใน [ปัญหา](https://github.com/github/opensource.guide/issues) และ [Pull Requests](https://github.com/github/opensource.guide) ของพื้นที่เก็บข้อมูลนี้ /pulls) ส่วน ใครก็ตามสามารถเข้าร่วมการสนทนาเหล่านี้ได้

หากเป็นไปได้ อย่านำการสนทนาเหล่านี้ไปใช้ช่องทางส่วนตัว รวมทั้งติดต่อกับผู้ดูแลโดยตรง การทำให้การสื่อสารเป็นแบบสาธารณะหมายความว่าทุกคนจะได้รับประโยชน์และเรียนรู้จากการสนทนา
---

# Contributing to Open Source Guides

Thanks for checking out the Open Source Guides! We're excited to hear and learn from you. Your experiences will benefit others who read and use these guides.

We've put together the following guidelines to help you figure out where you can best be helpful.

## Table of Contents

0. [Types of contributions we're looking for](#types-of-contributions-were-looking-for)
0. [Ground rules & expectations](#ground-rules--expectations)
0. [How to contribute](#how-to-contribute)
0. [Style guide](#style-guide)
0. [Setting up your environment](#setting-up-your-environment)
0. [Community](#community)

## Types of contributions we're looking for

There are many ways you can directly contribute to the guides (in descending order of need):

* Fix editorial inconsistencies or inaccuracies
* [Translate guides into other languages](docs/translations.md)

Interested in contributing to this Open Source Guide? Read on!

## Ground rules & expectations

Before we get started, here are a few things we expect from you (and that you should expect from others):

* Be kind and thoughtful in your conversations around this project. We all come from different backgrounds and projects, which means we likely have different perspectives on "how open source is done." Try to listen to others rather than convince them that your way is correct.
* Open Source Guides are released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.
* Please ensure that your contribution passes all tests if you open a pull request. If there are test failures, you will need to address them before we can merge your contribution.
* When adding content, please consider if it is widely valuable. Please don't add references or links to things you or your employer have created, as others will do so if they appreciate it.

## How to contribute

If you'd like to contribute, start by searching through the [pull requests](https://github.com/github/opensource.guide/pulls) to see whether someone else has raised a similar idea or question.

If you don't see your idea listed, and you think it fits into the goals of this guide, open a pull request.

## Style guide

If you're writing content, see the [style guide](./docs/styleguide.md) to help your prose match the rest of the guides.

## Setting up your environment

This site is powered by [Jekyll](https://jekyllrb.com/). Running it on your local machine requires a working [Ruby](https://www.ruby-lang.org/en/) installation with [Bundler](https://bundler.io/).

Once you have that set up:

1. Grant execution permissions to the scripts:

```bash
chmod +x script/bootstrap
chmod +x script/server
```

2. Execute the scripts:

```bash
./script/bootstrap
./script/server
```

…and open <http://localhost:4000> in your web browser.

## Community

Discussions about the Open Source Guides take place on this repository's [Issues](https://github.com/github/opensource.guide/issues) and [Pull Requests](https://github.com/github/opensource.guide/pulls) sections. Anybody is welcome to join these conversations.

Wherever possible, do not take these conversations to private channels, including contacting the maintainers directly. Keeping communication public means everybody can benefit and learn from the conversation.
