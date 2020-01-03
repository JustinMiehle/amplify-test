import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import AgeRange from '@app/shared/models/staff/age-range/age-range.model';
import { specialties } from '@app/shared/models/staff/specialty/specialties';
import { NotificationService } from '@app/shared/services/notifications/notification.service';
import { Gender } from '@models/staff/gender/gender.enum';
import Staff from '@models/staff/staff.model';
import { StaffService } from '@services/staff/staff.service';
import { ageRanges } from './../../../../shared/models/staff/age-range/age-ranges';

@Component({
  selector: 'app-find-staff',
  templateUrl: './find-staff.component.html',
  styleUrls: ['./find-staff.component.scss']
})
export class FindStaffComponent implements OnInit {
  filteredStaff: Staff[];
  allStaff: Staff[];
  ageRanges: AgeRange[] = ageRanges;
  specialties = specialties;
  ageRange: AgeRange;
  gender: Gender;
  genders = Object.values(Gender);

  selectedGenders: string[];
  selectedAgeRanges: AgeRange[];
  selectedSpecialties: string[];
  forJob: string;

  staffDisplayedColumns: string[] = ['name', 'age', 'hairColor', 'location', 'specialty', 'gender'];
  filteredStaffSource: MatTableDataSource<Staff>;
  @ViewChild(MatSort, { static: false }) filteredStaffSort: MatSort;

  constructor(
    private staffService: StaffService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.allStaff = this.filteredStaff = this.staffService.getStaff();

    this.filteredStaffSource = new MatTableDataSource(this.filteredStaff);
    this.filteredStaffSource.sort = this.filteredStaffSort;

    this.route.queryParamMap.subscribe(queryParams => {
      this.selectedAgeRanges = queryParams.getAll('ageRange').map(ageRange => AgeRange.fromString(ageRange));
      this.selectedSpecialties = queryParams.getAll('specialty').map(specialty => specialty);
      this.selectedGenders = queryParams.has('gender') ? [Gender[queryParams.get('gender')]] : [];
      this.forJob = queryParams.get('forJob');
      !!this.forJob ? this.staffDisplayedColumns.push('request') : null;
      this.filter();
    });
  }

  filter() {
    this.filteredStaffSource.data = this.allStaff
      .filter(
        staff => this.selectedGenders.length === 0 || this.selectedGenders.find(gender => gender === staff.gender)
      )
      .filter(
        staff =>
          this.selectedAgeRanges.length === 0 ||
          this.selectedAgeRanges.find(ageRange => staff.age <= ageRange.upper && staff.age >= ageRange.lower)
      )
      .filter(
        staff =>
          this.selectedSpecialties.length === 0 ||
          this.selectedSpecialties.find(specialty => staff.specialty === specialty)
      );
  }

  navigateToStaff(staffId: string) {
    this.router.navigate(['/agency/staff-profile/' + staffId]);
  }

  navigateToJob(jobId: string) {
    this.router.navigate(['/agency/job-details/' + jobId]);
  }

  requestStaffForJob(event: MouseEvent, staff: Staff) {
    event.stopPropagation();
    this.notificationService.success(`You requested ${staff.name} for ${this.forJob}`)
  }

  compareAgeRanges(a1: AgeRange, a2: AgeRange) {
    return a1 && a2 && a1.display === a2.display;
  }


}
