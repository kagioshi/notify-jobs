import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CommentsProps {
  pageId: string;
  pageTitle: string;
}

const Comments: React.FC<CommentsProps> = ({ pageId, pageTitle }) => {
  // In a real implementation, this would use Cusdis React component
  // import { ReactCusdis } from 'react-cusdis';
  
  // For now, we'll show a placeholder that explains how to integrate Cusdis
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-6 rounded-lg text-center">
          <h3 className="font-semibold mb-2">Comments Integration Ready</h3>
          <p className="text-sm text-muted-foreground mb-4">
            To enable comments, set up Cusdis and add your APP_ID to environment variables.
          </p>
          <div className="bg-background p-4 rounded border text-left text-xs font-mono">
            <div className="text-muted-foreground">// .env.local</div>
            <div>NEXT_PUBLIC_CUSDIS_APP_ID=your_app_id_here</div>
            <div className="mt-2 text-muted-foreground">// Component usage:</div>
            <div>{`<ReactCusdis`}</div>
            <div>{`  host="https://cusdis.com"`}</div>
            <div>{`  appId={process.env.NEXT_PUBLIC_CUSDIS_APP_ID}`}</div>
            <div>{`  pageId="${pageId}"`}</div>
            <div>{`  pageTitle="${pageTitle}"`}</div>
            <div>{`/>`}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Comments;