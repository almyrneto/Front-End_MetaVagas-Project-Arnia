export const vacancies = [
    {
        vacancyRole : "backend",
        wage : "3000",
        location : "São Paulo",
        vacancyType : "internship",
        vacancyDescription : "maintain database",
        level : "junior",
        companyId : 1,
        advertiserId : 1,
        technologies : ["nestJs", "Mongodb", "typescript", "postgres", "Python"]
    },
    {
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