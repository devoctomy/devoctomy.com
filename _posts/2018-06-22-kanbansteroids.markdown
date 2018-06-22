---
layout: post
title: Kanban On Sterioids
date: 2018-06-22
last-updated: 2018-06-22
description: A fresh start
image: /assets/images/postitnotes.jpg
image-sm: /assets/images/postitnotes.jpg
type: idea
author: nick
---

I love using Kanban boards to keep myself organised, for both work and personal life (yes I am that sad!).  This idea is to extend the Kanban board into something that's more versitile and also suited better toward personal productivity and behavior reinforcement, as opposed to just work work work.

## Overview

For those that don't know what a Kanban board is, I'll quickly go over the basics first before detailing my suggestions to make an improved version.

Essentially, Kanban boards consist of 2 parts, the board and its swim lanes, and cards. Traditionally, Kanban boards weren't digital at all, they were (and still are), physical boards with cards placed onto them, it's worth bearing that in mind as it shows how little its digital form has parted from the original design.

### The board

The board is split into lanes, the lanes can differ entirely on use-case, but there is still a general theme to the layout.  A board can have as many lanes as is required, with each lane having a title, set of limits and rules.

For example, the most basic board would consist of 2 lanes, the left lane containing cards "to do", and the right lane containing cards "completed".  You could treat the lanes as status of progress for each card.

Each lane can also have a limit as to the number of cards that can be in it at any one point.  This is simply to prevent overloading the people working on the cards and this would vary primarily on the size of the team.

### The cards

The cards simply represent tasks, preferably the smaller the better, a group of cards could be part of a group of cards that make up a larger task, but for now just to keep things simple, let's just think of them as separate tasks that can be completed independently of each other.

A card would start its life in the left-most lane, in order of priority, from top, to bottom.  As a task's status is changed, it progresses through each lane, until it reaches the far-right lane.  In our simple case as mentioned above, as there are only 2 lanes, the cards would simply get moved from "to do" into "completed" as they are completed.

## Increasing complexity

So now we understand the simplest of boards, we can start adding more lanes into the process.  Let's take the perspective of a very simply board for a software engineering team.  You might have the following lanes,

* **Backlog** : This is effectively the same as our "to do" list.
* **Developing (3)** : This lane represents tasks that we are working on.
* **Testing (3)** : This lane represents tasks that are being tested.
* **Completed** : As with our 2 lane board, this lane represents our completed tasks.

You may notice above that in the centre 2 lanes, I have included a number in brackets, this represents the limit of cards that can be in the lane at any one time.

So in this example, there may have 5 cards in the first lane, they might represent bugs. So, one at a time, the cards will be worked on by a developer. First going into the "Developing" lane, and then moving into the "Testing" lane when development has completed. At that point, the tester would then pick up on the cards in the "Testing" lane and moving them into the "Completed" lane when testing has been successfully passed. In this instance, let's assume that if testing fails, a task moves back to the first name.

At any one point, the lanes will never exceed their limit, so if we end up with 3 cards in the "Testing" lane, as the tester hasn't pulled his/her finger out yet, no more work should be completed by the developer until the lane is clear. Although a card can enter the "Developing" lane, it will be blocked by the "Testing" lane.

Hopefully you can already see how this system can easily be customised to suit almost any working process, even for things in your personal life.

## Limitations

Now one problem I found with Kanban boards, is that it doesn't cover every type of task that needs to be undertaken.  For example, not every task is binary "Not Done / Done", some may have many granular steps that need to take place before being moved into the next lane.  Also, some tasks may only be able to be worked upon at certain times of the day / week / month etc. meaning that the rest of the time, they fill up the board. The same goes for the lanes themselves, in the instance of the case above, we could say that the "Testing" lane can only be worked up when the tester is working, so if he/she only works 3 days a week, the rest of the week, it might not make as much sense to even concern yourself with the lane, or at least not so much detail.  With that said, here's an overview of proposed changes to the board and cards, to help cover these shortcomings in a digital age.

### Redesigning the board

Most of my ideas for improvement are found within the cards, but I have thought of at least one noticeable change for the board that would come in quite handy.

* **Time restrictions** : This feature would enable you restrict visibility / functionality of the lane to within a specific time frame.  For example, I may want a lane to be visible only on Sundays, or all days but only between the hours of 6pm and midnight.
  -  *Visibility may also not be hidden entirely, but disabled, and made less prominent in one way or another. This would prevent lanes from being forgotten about entirely.*

### Redesigning the cards

My suggestions for card improvements are as follows,

*  **Time restrictions** : This feature would enable you restrict visibility / functionality of the card to within a specific time frame.  For example, I may want a card to be visible only on Sundays, or all days but only between the hours of 6pm and midnight.
  - *Visibility may also not be hidden entirely, but disabled, and made less prominent in one way or another. This would prevent lanes from being forgotten about entirely.*
*  **Auto-Renewing** : This feature would enable you to make cards that get recreated and put back into their starting lane on a timely basis. For example, you may want a few cards to be created every Friday night, for you to complete over the weekend, if they are completed, they would be re-created for you the following Friday. *This feature is quite important for my use cases as I would like to use the system to keep myself organised with regular chores.*

I also think that the whole system would benefit from having an extendible card system.  So starting with a standard task, several different types could be derived from it, and even opened up to allow for 3rd party card types.  The card types I think would be good to begin with are as follows,

* **Standard Card** : These cards are the default, standard Kanban card, with no additional functionality added to them. The properties would include,
  -  *Title*
  -  *Description*
  -  *Tags*
  -  *Colour*
  -  *Comments*
  -  *Due Date*
* **Stepped Card** : These cards would allow for the progression of a task through various steps. For example, I may want to track my progress through reading a book, so I may have 500 pages in the book, which would equate to 500 steps. My progress would then be displayed in various formats, including percentage. Additional properties to the standard card would include,
  -  *Maximum Steps*
  -  *Current Step*
  -  *Display Format (Count, Percentage)*
* **Timed Card** : These cards would have a total elapsed time. As some tasks may be indeterminate, or you may simply want to put a certain amount of time into a task each week, these would automatically elapse when in 1 or more specific lanes. Additional properties to the standard card would include,
  -  *List of lanes to elapse in*
  -  *Indeterminate?*
  -  *Total time required until completion*
* **Counter Card** : These cards are for counting specific activities and could be used for behaviour tracking. For example, you may be wanting to track how many sit-ups you are doing in an exercise regimen, so with this card you would add/subtract an integer value when working upon the card. The task may complete when it gets to an optional limit or may be indeterminate. Additional properties to the standard card would include,
  -  *Maximum (optional)*
  -  *Value*
* **Checked List Card** : These cards would contain a list of separate items that are to be checked off before the card can be completed, or abandoned as incomplete. For example, you may use a checked list card for preparation of a meal, with each item being a component of the meal to prepare.  Additional properties to the standard card would include,
  -  *List of items*

> Another feature, although I'm not entirely sure how this would fit in exactly, would be the concept of a mutually exclusive group of tasks, so that you can only work on one of them at a time.  These may include things like, weekend activities, "go to cinema", "eat out", "Netflix and chill" etc. Not chore / work related, but still relevant to the concept of redesign.

### Redesigning the GUI

One thing about adding all of these additional features is that the GUI would need to be able to surface all of the important information without main the board look overly complex and cluttered. I propose to address this primarily by extending the cards into a collapsible form.

Using a collapsible card would allow for a compact and an extended via of each card.  The compact view showing the minimum amount of information you need at a glace of the card, and an extended view which would show all information, such as comments, and simply progress charts (for BIO feedback).

### Server-Side Components

I won't detail this side of things here as it really isn't relevant to the redesign of a Kanban board, but more-so the architecture of a cloud-based service. I had originally thought that the data for this could also be stored in a folder on the users device, or cloud service, such as OneDrive, DropBox, Google Drive etc. Great for the security conscious who don't want to share everything with the behemoth IT companies.

### Final Notes

I'm messing about with Xamarin Forms to knock up samples of the UI and if I can get the look that I'm after, it's quite possible that I will work on this. I'll upload any designs to this page and any other relevant files as / when I create them. If anything, it felt good getting this down!
