import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';

interface Job {
  id: number;
  title: string;
  description: string;
  duration: string;
  employer: string;
}

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job!: Job;

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit() {
    const jobId = parseInt(this.route.snapshot.paramMap.get('jobId') || '0', 10);
    this.jobService.getJob(jobId).subscribe(job => {
      this.job = job;
    });
  }
}