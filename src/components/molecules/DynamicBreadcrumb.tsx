'use client';

import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'; // pastikan path import sesuai

const DynamicBreadcrumb: React.FC = () => {
  // Mendapatkan path saat ini, misalnya "/building/data-fetching"
  const location = useLocation();

  // Memecah path menjadi segmen dan menghilangkan string kosong
  const segments = location.pathname.split('/').filter(Boolean);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Item breadcrumb pertama sebagai Home */}
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {segments.map((segment, index) => {
          // Membuat URL kumulatif, contoh: /building, /building/data-fetching
          const href = '/' + segments.slice(0, index + 1).join('/');
          // Jika segmen terakhir maka render sebagai teks biasa, bukan link
          const isLast = index === segments.length - 1;
          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{segment}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
