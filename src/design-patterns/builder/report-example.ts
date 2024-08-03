// #region: No builder pattern
class MyReport {
  title: string;
  dateRange?: string;
  filters?: string[];
  author?: string;
  summary?: string;

  constructor(title: string);
  constructor(title: string, dateRange: string);
  constructor(title: string, dateRange: string, filters: string[]);
  constructor(
    title: string,
    dateRange: string,
    filters: string[],
    author: string,
  );
  constructor(
    title: string,
    dateRange: string,
    filters: string[],
    author: string,
    summary: string,
  );
  constructor(
    title: string,
    dateRange?: string,
    filters?: string[],
    author?: string,
    summary?: string,
  ) {
    this.title = title;
    if (dateRange !== undefined) this.dateRange = dateRange;
    if (filters !== undefined) this.filters = filters;
    if (author !== undefined) this.author = author;
    if (summary !== undefined) this.summary = summary;
  }
}

const report1 = new MyReport('Sales Report');
const report2 = new MyReport(
  'Inventory Report',
  '2023-01-01 to 2023-01-31',
);
const report3 = new MyReport(
  'Customer Report',
  '2023-01-01 to 2023-01-31',
  ['region:NA', 'status:active'],
);
const report4 = new MyReport(
  'Employee Report',
  '2023-01-01 to 2023-01-31',
  ['department:HR'],
  'John Doe',
);
const report5 = new MyReport(
  'Financial Report',
  '2023-01-01 to 2023-01-31',
  ['currency:USD'],
  'Jane Doe',
  'Q1 Financial Overview',
);
// #endregion

// #region: Refactored
class _Report {
  constructor(
    public title: string,
    public dateRange?: string,
    public filters?: string[],
    public author?: string,
    public summary?: string,
  ) {}
}

class ReportBuilder {
  private title: string;
  private dateRange?: string = 'N/A';
  private filters?: string[] = [];
  private author?: string = 'N/A';
  private summary?: string = 'N/A';

  setTitle(title: string) {
    this.title = title;
    return this;
  }
  setDateRange(dateRange: string) {
    this.dateRange = dateRange;
    return this;
  }
  setFilters(filters: string[]) {
    this.filters = filters;
    return this;
  }
  setAuthor(author: string) {
    this.author = author;
    return this;
  }
  setSummary(summary: string) {
    this.summary = summary;
    return this;
  }
  build() {
    return new _Report(
      this.title,
      this.dateRange,
      this.filters,
      this.author,
      this.summary,
    );
  }
}
