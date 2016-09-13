Terre Natale Calculator
=======================
This project is a character sheet manager for the homebrew role playing game
system Terre natale, which have quite complex character creation rules.

Design Principle
---
The calculator was build witht the following in mind:
 - Backward Compatibility: All chracter sheet can be loaded in any later
   version, even though the save format evolved.
 - Ease of update: since the rules eveolve sometimes on a weekly basis,
   changing the formulas used should not be too complex
 - ease of use: creating a new character should not take more than a few
   minutes. While knowledge of the game system is required, the calculator
   should not require special training to use

History
---
When the Terre Natale system was introduced to me, the first thing that struck
me was the complexity of the skills assignment rules. Each skill can have
experience assigned to it, and the sum of assigned experience is used to
compute the stats. However, each skill's experience can influence multiple
stats, which ends up being a nightmare to keep track of.

So, just after our first game, my SO and myself started working on the project,
in order to simplify stats calculation. We did a quick job in Windows Forms,
without saves or special characters attributes like race or class.

Over the following months, the calculator expanded and changed with the game
system, introducting a save system, customisation of attributes, class bonus
calculation, an installer... We even ported the system over to WPF, separating it into two
projects, the Core calculation based on the Winform version, and the
presentation layer.

In the end, this ended up being an important lesson on software design, project
management and workload sharing. Now that the Terre Natale system is undergoing
a complete rework, the project is not updated anymore but, depending on our GM,
it may see a revival someday.

Download and screenshots
---

All the code and releases are available on Github

<a href=https://github.com/Jupotter/Terre-Natale-Calculateur/release/latest class="btn btn-success " >
Latest release
<span class="octicon octicon-desktop-download" aria-hidden="true"></span>
</a>
<a href=https://github.com/Jupotter/Terre-Natale-Calculateur class="btn btn-info " >
View on Github
<span class="octicon octicon-mark-github" aria-hidden="true"></span>
</a>
