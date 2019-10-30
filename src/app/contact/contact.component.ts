import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'ck-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  message: string;
  email: string;

  constructor() {
  }

  ngOnInit() {
  }
}
