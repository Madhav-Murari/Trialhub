export enum RoleType {
    superAdmin = 'superAdmin',
    admin = 'admin',
    manager = 'manager',
    employee = 'employee',
    // default = 'employee',
}

export interface UserDetails {
    coverage: {
        working_hours: {
            [key: string]: any[];
        };
        alternate_working_days: any[];
        partial_working_hours: any[];
        holidays: any[];
    };
    paidHolidayRemaining: string;
    password: string;
    skills: any[];
    language: any[];
    _id: string;
    email: string;
    phone_number: string;
    name: string;
    clientId: string;
    dateOfBirth: string;
    role: string;
    parent: string;
    __v: number;
}

//Task Proptypes
export interface TaskDetails {
    userId: string;
    clientId: string;
    task: string;
    status: string;
    startDate: string;
    endDate: string;
}
export interface TaskResponse {
    data: TaskDetails[];
    limit: number;
    page: number;
    totalCount: number;
    totalUsers: TaskDetails[];
}

//Meeting Proptypes
export interface MeetingDetails {
    totalCount: number;
    page: number;
    limit: number;
    data: any[];
    totalUsers: any[];
}

//Attendence Proptypes
export interface TimeCollection {
    date?: string;
    clock_in_time?: string;
    clock_out_time?: string;
}

export interface AttendanceRequest {
    date?: string;
    complain?: string;
}

export interface AttendanceDetails {
    userId: string;
    clientId: string;
    status?: string;
    attendance: {
        timeCollection?: TimeCollection[];
        request?: AttendanceRequest[];
    };
}
export interface AttendanceResponse {
    data: AttendanceDetails[];
    totalAttendances: AttendanceDetails[];
    limit: number;
    page: number;
    totalCount: number;
}
export interface AuthData {
    userId: string;
    clientId: string;
    role: RoleType;
}