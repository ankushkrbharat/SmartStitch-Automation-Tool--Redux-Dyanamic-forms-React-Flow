import type { ServiceDefinition } from '../types';

export const services: ServiceDefinition[] = [
  {
    type: 'trigger',
    service: 'email_received',
    label: 'Email Received',
    fields: ['from', 'subjectContains'],
  },
  {
    type: 'trigger',
    service: 'file_uploaded',
    label: 'File Uploaded (Drive)',
    fields: ['folder', 'fileType'],
  },
  {
    type: 'trigger',
    service: 'form_submission',
    label: 'Form Submission',
    fields: ['formId'],
  },
  {
    type: 'action',
    service: 'send_whatsapp',
    label: 'Send WhatsApp Message',
    fields: ['to', 'message'],
  },
  {
    type: 'action',
    service: 'send_slack',
    label: 'Send Slack Message',
    fields: ['channel', 'text'],
  },
  {
    type: 'action',
    service: 'add_google_sheet_row',
    label: 'Add Row to Google Sheet',
    fields: ['spreadsheetId', 'values'],
  },
  {
    type: 'action',
    service: 'send_email',
    label: 'Send Email',
    fields: ['to', 'subject', 'body'],
  },
  {
    type: 'condition',
    service: 'text_match',
    label: 'Text Contains',
    fields: ['field', 'contains'],
  },
  {
    type: 'condition',
    service: 'numeric_check',
    label: 'Check Number',
    fields: ['field', 'operator', 'value'],
  },
  {
    type: 'condition',
    service: 'date_check',
    label: 'Date Condition',
    fields: ['field', 'beforeAfter', 'date'],
  }
];
