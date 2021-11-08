function splitNames(string) {
    string = string.split('.')
    return string
}
export function domainType(domains: string[]): string[] {
    let arrayOfOrgs = []
    domains.forEach((item) => {
        let split = splitNames(item)
       
        if(split.includes('org')) {
            arrayOfOrgs.push('organization')
        } else if(split.includes('com')) {
            arrayOfOrgs.push('network')
        } else if(split.includes('net')) {
            arrayOfOrgs.push('information')
        } else {
            arrayOfOrgs.push('commercial')
        }
    })

    return arrayOfOrgs
}   


console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));