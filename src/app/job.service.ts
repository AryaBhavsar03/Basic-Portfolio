import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Job {
  id: number;
  title: string;
  description: string;
  duration: string;
  employer: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: Job[] = [
    {
      id: 1,
      title: 'Full Stack Web Developer',
      description: 'Learning to be a web developer',
      duration: '4 Months',
      employer: 'Bethel Tech Student'
    }
  ];

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }

  getJob(jobId: number): Observable<Job> {
    const job = this.jobs.find(j => j.id === jobId);
    return of(job || ({} as Job));
  }
}
