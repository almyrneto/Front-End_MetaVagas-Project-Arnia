export const vacancies = [
    {
        id: 1,
        vacancyRole : "backend",
        wage : "3000",
        location : "São Paulo",
        vacancyType : "internship",
        vacancyDescription : "maintain database",
        level : "junior",
        companyId : 1,
        advertiserId : 1,
        technologies : []
    },
    {
        id : 2,
        vacancyRole : "frontend",
        wage : "3000",
        location : "Brasília",
        vacancyType : "internship",
        vacancyDescription : "maintain website layout",
        level : "junior",
        companyId : 1,
        advertiserId : 1,
        technologies : ["React", "typescript", "Flux", "Rest"]
    },
    {
        id : 3,
        vacancyRole : "devops",
        wage : "3000",
        location : "Rio de Janeiro",
        vacancyType : "internship",
        vacancyDescription : "maintain cloud system",
        level : "junior",
        companyId : 1,
        advertiserId : 1,
        technologies : ["HTTP", "Java", "SRE", "SSL"]
    },
    {
        id : 4,
        vacancyRole : "frontend",
        wage : "3000",
        location : "Caucaia",
        vacancyType : "internship",
        vacancyDescription : "maintain website layout",
        level : "junior",
        companyId : 1,
        advertiserId : 1,
        technologies : ["React", "Typescript", "Flux", "Rest"]
    },
    {
        id : 5,
        vacancyRole : "devops",
        wage : "7000",
        location : "São Paulo",
        vacancyType : "part-time",
        vacancyDescription : "maintain database",
        level : "mid-level",
        companyId : 1,
        advertiserId : 1,
        technologies : ["HTTP", "Java", "SRE", "SSL"]
    },
    {
        id : 6,
        vacancyRole : "devops",
        wage : "7000",
        location : "Brasília",
        vacancyType : "part-time",
        vacancyDescription : "maintain database",
        level : "mid-level",
        companyId : 1,
        advertiserId : 1,
        technologies : ["HTTP", "Java", "SRE", "SSL"]
    },
    {
        id : 7,
        vacancyRole : "backend",
        wage : "9000",
        location : "Rio de Janeiro",
        vacancyType : "full-time",
        vacancyDescription : "maintain database",
        level : "senior",
        companyId : 1,
        advertiserId : 1,
        technologies : ["nestJs", "Mongodb", "typescript", "postgres"]
    },
    {
        id : 8,
        vacancyRole : "frontend",
        wage : "9000",
        location : "Belo Horizonte",
        vacancyType : "full-time",
        vacancyDescription : "maintain website layout",
        level : "senior",
        companyId : 1,
        advertiserId : 1,
        technologies : ["React", "Typescript", "Flux", "Rest"]
    },
    {
        id : 9,
        vacancyRole : "devops",
        wage : "7000",
        location : "Brasília",
        vacancyType : "part-time",
        vacancyDescription : "maintain database",
        level : "mid-level",
        companyId : 1,
        advertiserId : 1,
        technologies : ["HTTP", "Java", "SRE", "SSL"]
    },
    {
        id : 10,
        vacancyRole : "frontend",
        wage : "9000",
        location : "Caucaia",
        vacancyType : "full-time",
        vacancyDescription : "maintain website layout",
        level : "senior",
        companyId : 1,
        advertiserId : 1,
        technologies : ["React", "Typescript", "Flux", "Rest"]
    },
    {
        id : 11,
        vacancyRole : "backend",
        wage : "3000",
        location : "São Paulo",
        vacancyType : "internship",
        vacancyDescription : "maintain database",
        level : "junior",
        companyId : 1,
        advertiserId : 1,
        technologies : ["nestJs", "Mongodb", "typescript", "postgres"]
    },
    {
        id : 12,
        vacancyRole : "backend",
        wage : "9000",
        location : "Rio de Janeiro",
        vacancyType : "full-time",
        vacancyDescription : "maintain database",
        level : "senior",
        companyId : 1,
        advertiserId : 1,
        technologies : ["nestJs", "Mongodb", "typescript", "postgres"]
    },
]

export type vacancy = {
        vacancyRole : string,
        wage : string,
        location : string,
        vacancyType : string,
        vacancyDescription : string,
        level : string,
        companyId : number,
        advertiserId : number,
        technologies : string[]

}