// app/swagger/page.tsx
'use client';
import SwaggerUI from 'swagger-ui-react'; // えらーは無視してください
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerPage() {
  return <SwaggerUI url="/openapi.yaml" />;
}
