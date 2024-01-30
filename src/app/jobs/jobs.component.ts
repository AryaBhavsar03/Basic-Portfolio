import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

interface Job {
  id: number;
  title: string;
  description: string;
  duration: string;
  employer: string;
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
}
