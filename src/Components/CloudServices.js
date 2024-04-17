import React from 'react';
import EcsCloudServices from "../assests/manageCloud.png";
import EcsAws from "../assests/aws.png";
import AwsDevops from "../assests/devops.png";
import AwsArchitecture from "../assests/awsArchitect.png";
import AwsMigration from "../assests/awsMigration.png";
function CloudServices() {
  return (
    <section className='container-fluid' style={{ backgroundColor: "#E1FDFA" }}>
    <div className='container'>
        <div className='row pt-5 d-flex'>
            <div className='col-md-6 col-12 order-md-1 order-1'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <p className="mt-5 text-start  fs-6" style={{ color: "#08A391" }}>Cloud  Services  Managemnet |  Cloud ECS Infoteh</p>
                        <h3 className='d-flex text-start display-5 fw-medium' style={{ color: "rgba(0, 0, 0, 0.722)" }}>Leveraging  Benefits  of Cloud  Computing  with  Managed  Services  and Solutions</h3>
                        <p className="pt-3 text-start fs-4">We're a Gartner recognised , triple certified managed cloud service provider. With our support,your teams our empowered to deliver more value with greater agility</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-12 order-md-2'>
                <img className="img-fluid" src={EcsCloudServices} alt='manageCloud' />
            </div>
        </div>
    </div>
    <div className='container'>
        <div className='row mt-5 d-flex'>
            <div className='col-md-6 col-12'>
                <img className="img-fluid" src={EcsAws} alt='ecsAws' />
            </div>
            <div className='col-md-6 col-12'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <p className="mt-5 text-start  fs-6" style={{ color: "#08A391" }}>Expert  Support  For  AWS Cloud  from  assessment  and  migration to  optimization  and  experiences </p>
                        <h3 className='d-flex text-start display-5 fw-medium' style={{ color: "rgba(0, 0, 0, 0.722)" }}>AWS  Cloud  Formation</h3>
                        <p className="pt-3 text-start fs-4">Scale your infrastructure worlwide and manage resources across all AWS accounts and regions through a single operations.Automate resource management across your organization with AWS service integration offering turnkey application distribution and govermance control.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='container'>
        <div className='row pt-5 d-flex'>
            <div className='col-md-6 col-12 order-md-1 order-1'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <p className="mt-5 text-start  fs-6" style={{ color: "#08A391" }}>Efficient  Deployement | Optimal Security | Cost Optimization | High Scalability</p>
                        <h3 className='d-flex text-start display-5 fw-medium' style={{ color: "rgba(0, 0, 0, 0.722)" }}>Become a Cloud DevOps Engineer</h3>
                        <p className="pt-3 text-start fs-4">Companies are looking for talented DevOps engineers to remain competitive In this agile world.</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-12 order-md-2'>
                <img className="img-fluid" src={AwsDevops} alt='awsDevops' />
            </div>
        </div>
    </div>
    <div className='container'>
        <div className='row mt-5 d-flex'>
            <div className='col-md-6 col-12'>
                <img className="img-fluid" src={AwsArchitecture} alt='ecsAws' />
            </div>
            <div className='col-md-6 col-12'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <p className="mt-5 text-start  fs-6" style={{ color: "#08A391" }}>AWS  Architecture  Design | ECS  Cloud  Infotech</p>
                        <h3 className='d-flex text-start display-5 fw-medium' style={{ color: "rgba(0, 0, 0, 0.722)" }}>AWS  Cloud  Solution  Architect</h3>
                        <p className="pt-3 text-start fs-4">AWS Well-Architected provides a framework to help cloud architects build secure, high-performing, resilient, and efficient architectures.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='container'>
        <div className='row pt-5 pb-5 d-flex'>
            <div className='col-md-6 col-12 order-md-1 order-1'>
                <div className='row'>
                    <div className='col-md-10 offset-md-1'>
                        <p className="mt-5 text-start  fs-6" style={{ color: "#08A391" }}>Efficient  Deployement | Optimal Security | Cost Optimization | High Scalability</p>
                        <h3 className='d-flex text-start display-5 fw-medium' style={{ color: "rgba(0, 0, 0, 0.722)" }}>Free  Cloud  Migration  Services  on  AWS</h3>
                        <p className="pt-3 text-start fs-4">Moving your existing data and mission critical workloads to the cloud is essential for the future success of your bussiness.But there is more to it than simply provisioning a server in the cloud</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-12 order-md-2'>
                <img className="img-fluid" src={AwsMigration} alt='awsMigration' />
            </div>
        </div>
    </div>
</section>
  )
}

export default CloudServices
