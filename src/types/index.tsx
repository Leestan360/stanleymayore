export interface  SchoolType {
    schoolName: string;
    // logo: string;
    subHeader: string;
    duration: string;
    desc: string;
    descBullets: Array<string>
}

export interface  WorkType {
    company: string;
    role: string;
    // companylogo: string;
    date: string;
    desc: string;
    stack: Array<string>;
    descBullets?: Array<string> | any;
}

export interface BlogType {
    url: string;
    title: string;
    description: string;
}


export interface BigProjectType {
    // image: string;
    projectname: string;
    description: string;
    footerlink: Array<any>
    stack: Array<any>

}

export interface AchievementType {
    title: string;
    subtitle: string; 
    // image: string;
    imagealt: string;
    footerlink: Array<any>

}


interface GazerType {
    totalCount: number
}

interface LanguageType {
    name: string;
    color: string;

}

export interface GitNodeType {
    name: string;
    description?: string;
    forkCount?: number;
    stargazers?: GazerType;
    url?: string;
    id?: string;
    diskUsage?: number;
    primaryLanguage?: LanguageType;
}

export interface ProjectType {
    node: GitNodeType
}