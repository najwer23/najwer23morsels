import React from 'react';
import styles from './CodeParser.module.css';

interface CodeParserProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const CodeParser: React.FC<CodeParserProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={[styles.najwer23morselsCodeParserContainer, 'MorselsCodeParser', className].filter(Boolean).join(' ')}
      {...props}>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
};

CodeParser.displayName = 'CodeParser';
