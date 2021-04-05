export interface TableRow {
    title: string;
    property: string;
}


export const rows: TableRow[] = [
    { title: 'Name', property: 'name' },
    { title: 'Description', property: 'description' },
    { title: 'Stars', property: 'stars' },
    { title: 'OpenIssues', property: 'openIssues' },
    { title: 'Watchers', property: 'watchers' },
];