import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UtilsService } from 'src/app/utils.service';
import { CareersModalComponent } from '../modal/careers-modal/careers-modal.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  careerList = [{
    id: "001",
    title: "Development Consultant",
    subtitle: "(Dynamics 365)",
    scope: "This role will work with clients to design and implement Dynamics 365 applications and pick the best technical architecture to solve their business needs.",
    duties: [
      "Design, develop, test, and support features, experiences, and solutions for end-to-end business scenarios over the full stack using modern development technologies",
      "Debug and handle customer reported issues.",
      "Accountable for the quality, usability, and performance of features.",
      "Work closely with the Functional Consultant, Project Manager, and Clients to ensure that customer requirements are thoroughly understood and reflected.",
      "Attend workshops and meetings for reviewing current business processes."
    ],
    qualification: [
      "Bachelor’s degree in Computer Science, Computer Engineering, Information Technology, or related course.",
      "At least 4 years’ experience in building and shipping Dynamics 365 F&O and BC solutions.",
      "Deep understanding and demonstrated hands-on experience on Dynamics 365 Finance & Operations and Business Central with deep expertise in one or more areas such as Finance, Supply Chain Management, Manufacturing, or Technical/Platform Engineering expertise.",
      "Has strong understanding of project management in software.",
      "Application development experience: Power BI, Power Apps, Dynamics 365 CE apps.",
      "Ability to learn new technology in a fast-paced environment.",
      "Passion for customers and focus on delivering the right customer experience with exposure to customer side troubleshooting.",
      "Comfortable interacting with clients of different backgrounds and levels.",
      "Demonstrate strong problem-solving skills and an ability to resolve application issues.",
      "Ability to work collaboratively with a team encompassing many different backgrounds and experience levels as well as work independently as needed."
    ],
    niceToHave: [
      "Experience with Devops, Git, or other source control management tools.",
      "Preferable with experience in cloud computing technologies – Azure Core Platform; Data Platform: SQL, Azure DB/storage.",
      "Has experience in agile development methodologies."
    ]
  }, {
    id: "002",
    title: "Development Consultant",
    subtitle: "(Microsoft Stack)",
    scope: "",
    duties: [
      "Design and develop Microsoft 365 applications and solutions: Power Automate (Flow), Power Apps, Power BI, Dynamics 365, and SharePoint Online.",
      "Design, develop, and maintain key components of the software suite using Microsoft 365 APIs.",
      "Perform software design using software development fundamentals and processes.",
      "Debug, test, and deploy software solutions.",
      "Implement custom solutions that leverage various Microsoft 365 services.",
      "Analyze the business requirements by collaborating with all the stakeholders, studying systems flow, data usage, and work processes.",
      "Document and demonstrate solutions by developing documentation, flowcharts, layouts, diagrams, etc."
    ],
    qualification: [
      "Bachelor’s degree in Computer Science, Computer Engineering, Information Technology, or related course.",
      "At least 2 years’ experience in building Microsoft 365 solutions including Power Automate (Flow), Power Apps, Power BI, Dynamics 365, SharePoint Online.",
      "Expert knowledge of building Power Apps and content types using the M365 API.",
      "Experience with Devops, Git, or other source control management tools.",
      "Experience using C#, Java, JavaScript, jQuery, Web Services, HTML5, or CSS3.",
      "Experience with front end frameworks (React, Angular).",
      "Experience with various design frameworks.",
      "Strong project and time management skills with an ability to set and maintain multiple, competing priorities.",
      "Application development experience: Power BI, Power Apps, Dynamics 365 CE apps.",
      "Ability to learn new technology in a fast-paced environment.",
      "Passion for customers and focus on delivering the right customer experience with exposure to customer side troubleshooting.",
      "Comfortable interacting with clients of different backgrounds and levels.",
      "Demonstrate strong problem-solving skills and an ability to resolve application issues.",
      "Ability to work collaboratively with a team encompassing many different backgrounds and experience levels as well as work independently as needed."
    ],
    niceToHave: [
      "Experience with SharePoint’s application services framework including implementation, configuration.",
      "Experience with SQL Server Reporting Services, SQL Server Analysis Services, and/or SQL Server Integration Services a plus. "
    ]
  }, {
    id: "003",
    title: "Solution Sales Specialist",
    subtitle: "",
    scope: "This is a client facing role that is responsible for driving revenue growth for Microsoft 365 Solutions.",
    duties: [
      "Acquisition of new clients through pipeline building and leads generation.",
      "Establishes and manages own network of clients.",
      "Development of channel strategies.",
      "Proposal development for Microsoft 365 Solutions.",
      "Creation of “Leads Generation to Leads Management” marketing programs for Microsoft 365 Solutions.",
      "Participation in overall standard product and services pricing with lead team members and members of sales team.",
      "Participation in business case development standard with cross functional team members and members of sales team.",
      "Manage marketing and sales budget.",
      "Key account management.",
      "Management of accounts for repeat sales.",
      "Sales closing for identified areas and customers."
    ],
    qualification: [
      "Bachelor’s degree (any course)",
      "At least 2 years’ experience in Sales; IT Software / Solution or Microsoft 365 Solutions sales experience is an advantage but not required.",
      "Excellent presentation and communication skills targeted to effectively present information across all levels of an organization.",
      "Comfortable interacting with clients of different backgrounds and levels.",
      "Ability to work collaboratively with a team, encompassing many different backgrounds and experience levels.",
      "Able to work independently, when needed."
    ]
  }];

  isMobile: boolean = false;

  constructor(
    public dialog: MatDialog,
    public utils: UtilsService
  ) { }

  ngOnInit(): void {
    this.isMobile = this.utils.isMobileDevice();
    console.log(this.isMobile);
  }

  getCareerDetails(id: string) {
    let data = null;
    this.careerList.forEach( value => {
      if(value.id === id) {
        data = value
      }
    });
    this.showCareerDetails(data)
  }

  showCareerDetails(data: any){
    this.dialog.open(CareersModalComponent, {data});
  }

}
