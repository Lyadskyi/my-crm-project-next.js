import React from 'react';

import CompanyTable from '@/app/components/company-table';
import CompanyRow from '@/app/components/company-row';
import { Status } from '@/app/components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Products"
          company="Costco Wholesale"
          status={Status.Active}
          promotion={true}
          country="USA"
          joinedDate="2023.02.19"
        />
        <CompanyRow
          id={2}
          category="Products"
          company="Costco Wholesale"
          status={Status.NotActive}
          promotion={false}
          country="USA"
          joinedDate="2023.02.19"
        />
        <CompanyRow
          id={3}
          category="Products"
          company="Costco Wholesale"
          status={Status.Pending}
          promotion={true}
          country="USA"
          joinedDate="2023.02.19"
        />
        <CompanyRow
          id={4}
          category="Products"
          company="Costco Wholesale"
          status={Status.Suspended}
          promotion={false}
          country="USA"
          joinedDate="2023.02.19"
        />
        <CompanyRow
          id={5}
          category="Products"
          company="Costco Wholesale"
          status={Status.Active}
          promotion={true}
          country="USA"
          joinedDate="2023.02.19"
        />
        <CompanyRow
          id={6}
          category="Products"
          company="Costco Wholesale"
          status={Status.NotActive}
          promotion={true}
          country="USA"
          joinedDate="2023.02.19"
        />
        <CompanyRow
          id={7}
          category="Products"
          company="Costco Wholesale"
          status={Status.Pending}
          promotion={false}
          country="USA"
          joinedDate="2023.02.19"
        />
        <CompanyRow
          id={8}
          category="Products"
          company="Costco Wholesale"
          status={Status.Suspended}
          promotion={true}
          country="USA"
          joinedDate="2023.02.19"
        />
      </CompanyTable>
    </>
  );
}
