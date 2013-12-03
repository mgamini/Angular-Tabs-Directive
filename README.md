Angular-Tabs-Directive
======================

## What?
A directive that takes data from your selected scope source and creates an optionally rotating tab interface based on your in-line HTML. 

## Why?
There are countless libraries and tools out there to implement carousels and tabs, but none of the options out there fit what I needed.

- **Angular's UI Bootstrap**, for example, has some beautiful directives to accomplish this very task (http://angular-ui.github.io/bootstrap/). If you're not using bootstrap already and want to keep your footprint small, however, it's not a terribly appealing option.
- **Lightweight Angular Tabs** - Angular does have the capability to have some incredibly lightweight tabs without any explicit logic (http://jsfiddle.net/vojtajina/vM4FY/). That's great, but I wanted something a little more template-oriented.
- **Any other Angular tabs directive** - the problem with most tabs directives I've seen is that they rely upon explicit templates, either in a separate template file or in the directive itself. I wanted a directive that read the DOM below it, and applied the logic there - without the need to move my tab content html elsewhere. This also makes it easier to have multiple instances of the tabs.

## Example:
http://plnkr.co/edit/uuCMctEQv5ccGHazl4EU?p=preview