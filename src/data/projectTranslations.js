export const projectTranslations = {
  en: {
    1: {
      title: 'Comprehensive Fine Management',
      description: 'Business application focused on centralizing and optimizing comprehensive fine management, allowing users to register, consult, and control operational information from a modern Power Apps interface. The solution improves user experience, reduces manual tasks, and decreases time spent filling forms and sending emails.',
      solution: 'A Canvas App was developed in Power Apps using PCF Controls, HTML, and CSS to build a more dynamic, organized, and user-friendly interface. The application connects to SQL Server as the main database and uses Power Automate flows to send automatic notifications through Microsoft Teams and Outlook, as well as generate PDF and Excel reports. This implementation centralized data, improved information tracking, and achieved an estimated savings of 48 hours per month in operational activities.',
      tools: ['Power Apps', 'PCF Controls', 'HTML', 'CSS', 'Power Automate'],
      database: 'SQL Server',
      integrations: ['Microsoft Teams', 'Outlook', 'PDF report generation', 'Excel export'],
      benefits: [
        'Improved user experience',
        'Centralized operational data',
        'Estimated savings of 48 hours per month',
        'Reduced manual form filling',
        'Automated emails and notifications',
        'Report generation for tracking and control'
      ],
      license: 'Power Automate Per User'
    },
    2: {
      title: 'Course Purchasing Platform for Employees',
      description: 'Business application developed to manage and centralize course purchase requests for company employees, allowing information to be registered from a modern Power Apps interface while reducing manual forms and operational emails.',
      solution: 'A Canvas App was developed in Power Apps connected to SharePoint Lists as the main database. The solution allows course requests to be registered, employee and requested course information to be centralized, and communications to be automated through Power Automate flows. Microsoft Teams and Outlook notifications were also integrated, along with PDF report generation to improve tracking and control of internal requests.',
      tools: ['Power Apps', 'Power Automate', 'SharePoint', 'Office 365'],
      database: 'SharePoint Lists',
      integrations: ['Microsoft Teams', 'Outlook', 'PDF report generation'],
      benefits: [
        'Improved user experience',
        'Centralized course requests',
        'Time savings in form completion',
        'Reduced manual emails',
        'Automated internal notifications',
        'Better tracking of employee requests'
      ],
      license: 'Office E3'
    },
    3: {
      title: 'Prospects in Areas Without Internet',
      description: 'Business application developed to register field prospects from areas without internet connection, allowing commercial information to be captured offline and later synchronized when the device recovers connectivity.',
      solution: 'A Power Apps Canvas App with offline capabilities was developed for placing and registering prospects in areas without internet. The solution captures data from mobile devices, temporarily stores information during offline operation, and later synchronizes it with Dataverse as the main database. Power Automate flows were also integrated to send Outlook notifications and generate PDF reports, improving commercial tracking and reducing manual tasks.',
      tools: ['Power Apps', 'Power Automate', 'Dataverse', 'Office 365'],
      database: 'Dataverse',
      integrations: ['Outlook', 'PDF report generation', 'Offline synchronization'],
      benefits: [
        'Prospect capture without internet connection',
        'Improved field user experience',
        'Centralized commercial data',
        'Time savings in form completion',
        'Reduced emails and manual processes',
        'Later synchronization of registered information'
      ],
      license: 'Power Apps Premium'
    },
    4: {
      title: 'Account Closure Management for Deceased Customers',
      description: 'Business application developed to manage the account closure process for deceased customers, centralizing operational information, documentation, and case tracking from a Power Apps interface.',
      solution: 'A Canvas App was developed in Power Apps connected to Azure SQL Database as the main database, allowing users to register closure requests, consult customer information, validate relevant data, and maintain centralized control of the process. The solution integrates with Power Automate to send Microsoft Teams notifications and feed a Power BI dashboard, making it easier to monitor cases, statuses, and service times.',
      tools: ['Power Apps', 'Power Automate', 'Azure SQL Database', 'Power BI'],
      database: 'Azure SQL Database',
      integrations: ['Microsoft Teams', 'Power BI', 'Automatic notifications', 'Operational dashboard'],
      benefits: [
        'Centralized process data',
        'Improved user experience',
        'Time savings in form completion',
        'Reduced manual tasks',
        'Better request traceability',
        'Reports for operational follow-up'
      ],
      license: 'Power Automate Premium'
    },
    5: {
      title: 'Online Appointment Generation with Tutors',
      description: 'Business application developed to manage online appointment scheduling with tutors, allowing requests to be centralized, user information to be registered, and meetings to be coordinated in a more organized way from a Power Apps interface.',
      solution: 'A Canvas App was developed in Power Apps connected to a SQL database to register appointment requests, validate information, and centralize tracking of meetings with tutors. The solution integrates with Power Automate and Microsoft Graph API to automate online meeting creation, send notifications, and reduce the use of manual forms and operational emails.',
      tools: ['Power Apps', 'Power Automate', 'SQL', 'Microsoft Graph API'],
      database: 'SQL',
      integrations: ['Power Automate', 'Microsoft Graph API', 'Outlook', 'Online meeting generation', 'Automatic notifications'],
      benefits: [
        'Improved user experience',
        'Centralized appointment requests',
        'Time savings in form completion',
        'Reduced manual emails',
        'Automated online meetings',
        'Better coordination between users and tutors'
      ],
      license: 'Automate Per User Plan'
    },
    6: {
      title: 'Robot for Automatic Form Filling',
      description: 'RPA automation developed to reduce operational time in manual form filling, enabling employee information to be processed faster, more consistently, and more efficiently.',
      solution: 'A UiPath robot was implemented to automate form filling by replicating the manual actions previously performed by employees and significantly reducing the time dedicated to this activity. The solution optimizes the process for more than 2,500 employees, generating an estimated savings of 2 hours per employee and reducing errors associated with manual information entry.',
      tools: ['UiPath', 'RPA', 'Form automation'],
      database: 'Not required',
      integrations: ['Web form', 'Automated process', 'Robot-assisted execution'],
      benefits: [
        'Savings of 2 hours per employee',
        'Optimization for more than 2,500 employees',
        'Reduced manual form filling',
        'Reduced operational errors',
        'Improved process efficiency',
        'Standardized information registration'
      ],
      license: 'Power Automate Premium - 15 USD/month per user'
    },
    7: {
      title: 'RPA Robot for Bulk Form Filling',
      description: 'RPA automation developed to perform bulk form filling quickly and consistently, reducing operational time per employee and avoiding repetitive manual tasks.',
      solution: 'A UiPath robot was implemented to automate form filling, executing information registration in an assisted and repetitive way without requiring an additional database. The solution optimizes the process for more than 2,500 employees, reducing form completion time to approximately 2 minutes per employee and improving operational efficiency.',
      tools: ['UiPath', 'RPA', 'Form automation'],
      database: 'Not required',
      integrations: ['Web form', 'Automated process', 'Robot-assisted execution'],
      benefits: [
        'Reduced form filling time to 2 minutes per employee',
        'Automation for more than 2,500 employees',
        'Operational hour savings',
        'Reduced repetitive tasks',
        'Standardized information registration',
        'Improved process efficiency'
      ],
      license: 'Power Automate Premium - 15 USD/month per user'
    },
    8: {
      title: 'Sales Administration Request Traceability',
      description: 'Business application developed to centralize and trace requests from the Sales Administration area, allowing users to register, consult, update, and control operational information from a modern Power Apps interface.',
      solution: 'A Canvas App was developed in Power Apps using PCF Controls, HTML, CSS, and JavaScript to improve user experience and build a more dynamic interface. The solution connects to Dataverse as the main database and uses instant, automated, and scheduled Power Automate flows to manage processes, connect to master tables through CRUD operations, send Microsoft Teams and Outlook notifications, and generate PDF reports for operational tracking and control.',
      tools: ['Power Apps', 'Power Automate', 'PCF Controls', 'HTML', 'CSS', 'JavaScript', 'Dataverse'],
      database: 'Dataverse',
      integrations: ['Microsoft Teams', 'Outlook', 'PDF reports', 'Master tables', 'Instant flows', 'Automated flows', 'Scheduled flows', 'CRUD operations'],
      benefits: [
        'Improved user experience',
        'Centralized Sales Administration requests',
        'Traceability of each request status',
        'Time savings in form completion',
        'Reduced manual emails',
        'Automated notifications',
        'Report generation for operational follow-up'
      ],
      license: 'Power Apps Premium'
    },
    9: {
      title: 'Enterprise Inventory System',
      description: 'Canvas application developed in Power Apps and connected to SharePoint lists to manage products, entries, exits, current stock, alerts, and inventory movement traceability.',
      solution: 'The solution is designed as a functional mockup with future growth potential, prioritizing a simple, visual, and controlled operation. It allows products to be registered, warehouse entries and exits to be controlled, available stock to be viewed, low-stock alerts to be generated, and a movement history to be maintained to improve operational traceability.',
      tools: ['Power Apps', 'SharePoint', 'Power Automate'],
      database: 'SharePoint Lists',
      integrations: ['Power Automate', 'Microsoft Teams', 'Outlook', 'Excel export', 'Low-stock alerts'],
      benefits: [
        'Centralized product control',
        'Registration of warehouse entries and exits',
        'Current stock visualization',
        'Automated low-stock alerts',
        'Movement traceability',
        'Reduced manual errors',
        'Better operational inventory tracking'
      ],
      license: 'Microsoft 365 / Office E3'
    },
    10: {
      title: 'Comprehensive Multi-Industry Sales and Electronic Invoicing System',
      description: 'Business system designed to centralize sales or service records, customers or patients, products or services, payments, sequential receipt numbering, and electronic document issuance. The solution is oriented to a multi-industry model, allowing adaptation to stores, service companies, clinics, hospitals, laboratories, pharmacies, or other organizations that need to issue receipts, invoices, and related documents.',
      solution: 'The solution is implemented on Power Apps as the main user interface, SharePoint as the data repository, and Power Automate as the process, notification, and electronic invoicing API integration engine. The system allows operations to be registered, customers or recipients to be managed, products and services to be controlled, payments to be handled, series and sequential numbers to be managed, electronic receipts to be issued, and the sending, acceptance, or rejection status of generated documents to be tracked.',
      tools: ['Power Apps', 'SharePoint', 'Power Automate', 'API', 'Power BI'],
      database: 'SharePoint',
      integrations: ['Electronic invoicing API', 'Power Automate', 'Outlook', 'Microsoft Teams', 'PDF generation', 'XML generation', 'Receipt status query', 'Power BI', 'Excel export'],
      benefits: [
        'Centralized sales and service records',
        'Management of customers, patients, or recipients',
        'Control of products and services',
        'Payment and daily cash management',
        'Automatic receipt and invoice numbering',
        'Integration with electronic invoicing',
        'Tracking of sent, accepted, or rejected receipts',
        'Reduced manual processes',
        'Adaptable to different business industries'
      ],
      license: 'Microsoft 365 / Power Automate Premium depending on invoicing API'
    },
    11: {
      title: 'Help Desk Ticket System',
      description: 'The Help Desk Ticket System with Power Apps is a solution focused on registering, classifying, assigning, handling, and closing incidents or internal requests within a corporate environment. Its goal is to organize support operations, reduce response times, and provide full traceability for each service interaction.',
      solution: 'The solution was developed as a Canvas App in Power Apps connected to SharePoint lists, allowing users to register tickets, classify requests by area, category, priority, and status, assign owners, consult operational queues, and maintain a service history. The proposal is oriented to help desk scenarios for IT, functional support, or internal service teams where process visibility, SLA control, status tracking, and service traceability are required.',
      tools: ['Power Apps', 'SharePoint'],
      database: 'SharePoint Lists',
      integrations: ['SharePoint Lists', 'SharePoint catalogs', 'SharePoint attachments', 'Ticket history', 'Operational filters and views', 'Status and priority control'],
      benefits: [
        'Centralized incident and request registration',
        'Ticket classification by area, category, and priority',
        'Assignment of service owners',
        'Status tracking for each ticket',
        'Full support process traceability',
        'Better response time control',
        'Reduced requests managed by email or informal messages',
        'Operational visibility for the support team'
      ],
      license: 'Microsoft 365 / Office E3'
    },
    12: {
      title: 'Document Management System',
      description: 'Document management system designed to manage documents, their lifecycle, version control, approvals, signatures, and the history of actions performed on each document.',
      solution: 'The solution is implemented through a Canvas App in Power Apps connected to SharePoint libraries and lists, allowing documents to be registered, information to be classified by type, area, status, and owner, versions to be controlled, approvals to be managed, and a history of actions performed on each file to be maintained. Power Automate is used to automate review, approval, notification, and follow-up flows, while API integration can support electronic signature processes, external validation, or document generation depending on project scope.',
      tools: ['Power Apps', 'SharePoint', 'Power Automate'],
      database: 'SharePoint Lists / Document library',
      integrations: ['SharePoint document library', 'SharePoint Lists', 'Power Automate', 'Automatic approvals', 'Microsoft Teams', 'Outlook', 'Version control', 'Action history', 'PDF generation'],
      benefits: [
        'Centralized business documents',
        'Document lifecycle control',
        'Version tracking',
        'Approval management',
        'Traceability of performed actions',
        'Reduced scattered documents',
        'Improved control and information search',
        'Automatic notifications to owners',
        'Prepared for electronic signature integration'
      ],
      license: 'Microsoft 365 / Power Automate Premium depending on API usage'
    },
    13: {
      title: 'Desk and Office Reservation System',
      description: 'Desk and office reservation system developed to manage the use of physical spaces within a company. It allows employees to check availability, reserve desks, rooms, or offices, register attendance through check-in/check-out, and maintain traceability of daily, weekly, or monthly occupancy in a hybrid work environment.',
      solution: 'The desk reservation and office occupancy management solution with Power Platform is designed for companies that need to manage physical spaces in a hybrid context. It is implemented through a Canvas App in Power Apps connected to SharePoint, allowing offices, floors, spaces, reservations, users, and usage rules to be registered. Power Automate can be used to send confirmations, reminders, and alerts through Microsoft Teams or Outlook, as well as support check-in, check-out, no-show, and occupancy tracking processes.',
      tools: ['Power Apps', 'SharePoint', 'Power Automate', 'API'],
      database: 'SharePoint Lists',
      integrations: ['SharePoint', 'Power Automate', 'Microsoft Teams', 'Outlook', 'Corporate calendar', 'Check-in and check-out', 'QR validation', 'Reservation notifications', 'Calendar API', 'Occupancy reports'],
      benefits: [
        'Centralized desk and office reservations',
        'Space availability query',
        'Better occupancy control in hybrid offices',
        'Reduced manual or duplicated reservations',
        'Check-in and check-out registration',
        'Space usage traceability',
        'Automatic notifications to employees',
        'Improved physical space planning',
        'Prepared base for occupancy reports'
      ],
      license: 'Microsoft 365 / Power Automate Premium depending on API usage'
    },
    14: {
      title: 'Staff Roster',
      description: 'Application developed in Power Apps to simplify staff schedule management and administration within the organization. It centralizes employee records, shifts, guards, calendars, and operational availability in a visual and organized way.',
      solution: 'The solution enables tasks related to employee records, shift assignment, calendar queries, guard control, and support information visualization for decision-making to be performed in a more organized and centralized way. It is implemented through a Canvas App in Power Apps connected to SharePoint lists, with the option to automate reminders, alerts, and reports through Power Automate.',
      tools: ['Power Apps', 'SharePoint'],
      database: 'SharePoint',
      integrations: ['SharePoint Lists', 'Outlook', 'Shift calendar', 'Notifications'],
      benefits: [
        'Centralized staff scheduling',
        'Organized employee and role records',
        'Visual shift and guard assignment',
        'Fast monthly calendar query',
        'Better operational availability control',
        'Reduced manual or scattered files',
        'Decision-making support',
        'Prepared base for automatic alerts and reports'
      ],
      license: 'Microsoft 365 / Power Automate depending on automations'
    },
    15: {
      title: 'Invoice Registration with SUNAT Exchange Rate',
      description: 'Biomont needed to digitize and automate supplier invoice registration, a process that previously could depend on spreadsheets, manual exchange-rate calculations, and later consolidations by the finance team. The solution centralizes invoice registration, calculates the amount converted to soles using the SUNAT exchange rate, and allows the information to be analyzed through a Power BI report.',
      solution: 'An end-to-end solution was designed and implemented using Microsoft Power Platform to register supplier invoices, automatically obtain the SUNAT exchange rate according to the posting date, calculate the amount converted to soles, store the information in Dataverse, send daily notifications, and analyze the data through Power BI. The solution integrates Power Apps as the registration interface, Power Automate as the automation engine, SUNAT API for exchange-rate queries, Dataverse as the central database, and Power BI for financial indicator visualization.',
      tools: ['Power Apps', 'Power Automate', 'Dataverse', 'SUNAT API', 'Power BI', 'MCP'],
      database: 'Dataverse',
      integrations: ['SUNAT API', 'Power Automate', 'Dataverse', 'Power BI', 'MCP', 'Outlook', 'Automatic exchange-rate query', 'Daily notifications', 'Financial report', 'Automatic calculation in soles'],
      benefits: [
        'Digitized supplier invoice registration',
        'Automated SUNAT exchange rate',
        'Automatic calculation of the amount converted to soles',
        'Centralized financial information in Dataverse',
        'Reduced manual calculations',
        'Reduced operational errors',
        'Daily notifications to the responsible team',
        'Indicator visualization through Power BI',
        'Financial registration process traceability',
        'End-to-end solution with Power Platform'
      ],
      license: 'Power Apps Premium / Power Automate Premium / Power BI depending on environment'
    },
    16: {
      title: 'HR Benefits Agent',
      description: 'Conversational agent developed in Copilot Studio to centralize knowledge related to human resources benefits. It allows employees to ask questions about health, insurance, 401(k) plans, claims, enrollment, contacts, eligibility, and medical leave policies using a guided natural-language experience.',
      solution: 'The solution was designed as an autonomous conversational agent in Copilot Studio, structured through functional topics organized by knowledge domains. The agent uses official HR documentation as a knowledge source, including Benefits Guide 2026, Employee Handbook, Summary of Benefits, SharePoint / HR Portal, and provider directories. It also includes reusable components such as AskUnionStatus to validate and store the employee union status in Global.UnionStatus, allowing responses to be personalized and information to be reused during the conversation without duplicating logic in other topics.',
      tools: ['Copilot Studio', 'PDF Knowledge Source', 'SharePoint / HR Portal', 'Generative Answers', 'Global variables', 'Topic orchestration'],
      database: 'PDF / HR documentary sources',
      integrations: ['Copilot Studio', 'PDF as knowledge source', 'Benefits Guide 2026', 'Employee Handbook', 'Summary of Benefits', 'SharePoint / HR Portal', 'Provider directories', 'Conversational topics', 'Global variables', 'Global.UnionStatus', 'Fallback topic', 'Topic-level knowledge sources'],
      benefits: [
        'Centralized HR benefits information',
        'Conversational assistance for employees',
        'Answers to frequently asked benefits questions',
        'Guidance on administrative processes such as claims, enrollment, and leave policies',
        'Explanation of health, insurance, and 401(k) concepts',
        'Reduced repetitive questions to the HR team',
        'Consistent answers based on official sources',
        'Knowledge organized by functional domains',
        'Data reuse through global variables',
        'Scalable base for new conversational topics'
      ],
      license: 'Copilot Studio'
    },
    17: {
      title: 'Management Committee and Financial Statements Automation',
      description: 'Automation designed to prepare the monthly management committee by collecting reports by area, consolidating financial information, and generating executive documents from data stored in different files. The solution reduces manual work before the committee, organizes information delivery, and improves preparation for management decisions.',
      solution: 'The solution was implemented by combining Power Automate Cloud, Power Automate Desktop, AI Builder, and Python. Power Automate Cloud orchestrates the monthly process, manages report reception, centralizes files in SharePoint, and sends communications through Outlook. Power Automate Desktop supports interaction with local files or templates when the process requires desktop automation. AI Builder analyzes or extracts relevant information from documents, while Python processes consolidated data and generates an executive PDF using a predefined template. The result prepares key information for the committee, including executive summary, financial data, reports by area, and pending decisions.',
      tools: ['Power Automate Cloud', 'Power Automate Desktop', 'AI Builder', 'Python', 'SharePoint', 'Outlook'],
      database: 'SharePoint / Structured files',
      integrations: ['Power Automate Cloud', 'Power Automate Desktop', 'AI Builder', 'Python', 'SharePoint', 'Outlook', 'PDF template', 'File processing', 'Report consolidation', 'Automatic executive document generation'],
      benefits: [
        'Automated preparation of the management committee',
        'Centralized reports by area',
        'Consolidated information from different files',
        'Financial statement processing',
        'Reduced manual work before the committee',
        'Automatic executive PDF generation',
        'Better organization of pending decisions',
        'Automatic communications through Outlook',
        'Greater traceability of the monthly process',
        'Prepared base for future PPT, minutes, and agreement generation'
      ],
      license: 'Power Automate Premium / AI Builder depending on required capacity'
    }
  }
};
