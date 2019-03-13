# load-on-scoll

loads data when user scroll to bottom

## Install

- npm install
- import module
- import scss

## Usage

    <button
      dmLoadOnScoll
      (loadTrigger)="load($event)" >> method to load data
      [first]="0" >> start item number
      [itemsPerPage]="100" >> items per Page
      [loadDoneSubject]="loaded" >> rxjs subject ref
      [disableOnLoad]="true" >> disable button when loading
      [rotateOnLoad]="true" >> rotate button when loading
      rotateOnLoadChildSelector=".icon"  >> rotate only sub node
      >

```
by Dominik Mathmann
```
