import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from './ProtectedRoute'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/registration'
import LabProfile from '../pages/LabProfile'
import { LabStaffing } from '../pages/LabStaffing'
import { LabInfrastructure } from '../pages/LabInfrastructure'
// import { LabTests } from "../pages/LabTests";

import { LabTestsBiochemistry } from '../pages/LabTestsBiochemistry'
import { LabTestsBloodBank } from '../pages/LabTestsBloodBank'
import { LabTestsCytology } from '../pages/LabTestsCytology'
import { LabTestsHaematology } from '../pages/LabTestsHaematology'
import { LabTestsImmunology } from '../pages/LabTestsImmunology'
import { LabTestsMcrobiology } from '../pages/LabTestsMicrobiology'
import { LabTestsMolecular } from '../pages/LabTestsMolecular'
import { LabTestsParasitology } from '../pages/LabTestsParasitology'
import { LabTestsPathology } from '../pages/LabTestsPathology'
import { LabTestsSerology } from '../pages/LabTestsSerology'
import { LabTestsSpecialTest } from '../pages/LabTestsSpecialTest'

import { LabProfileDetail } from '../pages/LabProfileDetail'
import SliptaHome from '../pages/SliptaHome'

import SliptaAudits from '../pages/SliptaAudits'
import { SliptaAuditsDetail } from '../pages/SliptaAuditsDetail'
import SliptaAuditSection1 from '../pages/SliptaAuditSection1'
import SliptaAuditSection2 from '../pages/SliptaAuditSection2'
import SliptaAuditSection3 from '../pages/SliptaAuditSection3'
import SliptaAuditSection4 from '../pages/SliptaAuditSection4'
import SliptaAuditSection5 from '../pages/SliptaAuditSection5'
import SliptaAuditSection6 from '../pages/SliptaAuditSection6'
import SliptaAuditSection7 from '../pages/SliptaAuditSection7'
import SliptaAuditSection8 from '../pages/SliptaAuditSection8'
import SliptaAuditSection9 from '../pages/SliptaAuditSection9'
import SliptaAuditSection10 from '../pages/SliptaAuditSection10'
import SliptaAuditSection11 from '../pages/SliptaAuditSection11'
import SliptaAuditSection12 from '../pages/SliptaAuditSection12'

import { SliptaAuditSection1Detail } from '../pages/SliptaAuditSection1Detail'
import { SliptaAuditSection2Detail } from '../pages/SliptaAuditSection2Detail'
import { SliptaAuditSection3Detail } from '../pages/SliptaAuditSection3Detail'
import { SliptaAuditSection4Detail } from '../pages/SliptaAuditSection4Detail'
import { SliptaAuditSection5Detail } from '../pages/SliptaAuditSection5Detail'
import { SliptaAuditSection6Detail } from '../pages/SliptaAuditSection6Detail'
import { SliptaAuditSection7Detail } from '../pages/SliptaAuditSection7Detail'
import { SliptaAuditSection8Detail } from '../pages/SliptaAuditSection8Detail'
import { SliptaAuditSection9Detail } from '../pages/SliptaAuditSection9Detail'
import { SliptaAuditSection10Detail } from '../pages/SliptaAuditSection10Detail'
import { SliptaAuditSection11Detail } from '../pages/SliptaAuditSection11Detail'
import { SliptaAuditSection12Detail } from '../pages/SliptaAuditSection12Detail'
import SadcasA from '../pages/SadcasA'
import SadcasB from '../pages/SadCasB/SadcasB'
// import ComWithHigher from '../pages/ComWithHigher'
// import ComWithLower from '../pages/ComWithLower'
import LogisticsAndSupplyChain from '../pages/LogisticsAndSupplyChain'
// import QualityManagement from '../pages/QualityManagement'
import { LabBiosafetyBiosecurity } from '../pages/LabBiosafetyBiosecurity'
import { LabQMS } from '../pages/labQMS'
import { LabLogisticSupply } from '../pages/LabLogisticSupply'
import LabCommReports from '../pages/LabCommReports'
import { LabSpecimenRef } from '../pages/LabSpecimenRef'
import { LabAdudit } from '../pages/LabAudits'
import SadcasASummary from '../pages/SadcasASummary'
import { SadcasAIntro } from '../pages/SadcasAIntro'
import { SadcasBIntro } from '../pages/SadCasB/SadcasBIntro'
import { SadcasAGeneral } from '../pages/sadcasAGeneral'
import { SadcasAStructural } from '../pages/SadcasAStructural'
import { SadcasAResource } from '../pages/SadcasAResource'
import { SadcasAPreExam } from '../pages/SadcasAPreExam'
import { SadcasAManSys } from '../pages/SadcasAManSys'
import { SadcasASubmit } from '../pages/SadcasASubmit'
import { SadcasBSubmit } from '../pages/SadCasB/SadcasBSubmit'

import SadcasBSummary from '../pages/SadCasB/SadcasBSummary'
import SadcasBReqsReports from '../pages/SadCasB/SadcasBReqsReports'
import SadcasBReqProvideLabExams from '../pages/SadCasB/SadCasBReqProvideLabExams'
import SadcasBSampleReceipt from '../pages/SadCasB/SadcasBSampleReceipt'
import SadcasBFacEnvs from '../pages/SadCasB/SadCasFacEnvs'
import SadcasBExamProcesses from '../pages/SadCasB/SadcasBExamProcesses'
import SadcasBEnsureValExams from '../pages/SadCasB/SadcasBEnsureValExams'
import SadcasBEquipment from '../pages/SadCasB/SadcasBEquipment'
import SadCASBReagentsConsumeables from '../pages/SadCasB/SadCASBReagentsConsumeables'
import SadcasBPersonnel from '../pages/SadCasB/SadcasBPersonnel'
import SadcasBNonConformingWork from '../pages/SadCasB/SadcasBNonConformingWork'
import SadcasBProcessRequirements from '../pages/SadCasB/SadcasBProcessRequirements'
import { LabMentorship } from '../pages/LabMentorship'

function Routing() {
	return (
		<Routes>
			{/* Laboratory Profile */}

			<Route
				path="/"
				element={
					<ProtectedRoute>
						<LabProfile />
					</ProtectedRoute>
				}
			/>

			{/* Laboratory Profile Details*/}

			<Route
				path="/lab_profile/:lab_profileId/"
				element={
					<ProtectedRoute>
						<LabProfileDetail />
					</ProtectedRoute>
				}
			/>

			{/* Laboratory Staffing Section */}

			<Route
				path="/lab_staffing/:lab_profileId/"
				element={
					<ProtectedRoute>
						<LabStaffing />
					</ProtectedRoute>
				}
			/>

				{/* Laboratory Staffing Section */}

			<Route
				path="/lab_infrastructure/:lab_profileId/"
				element={
					<ProtectedRoute>
						<LabInfrastructure />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/lab_qms/:lab_profileId/"
				element={
					<ProtectedRoute>
						<LabQMS />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/lab_logistics/:lab_profileId/"
				element={
					<ProtectedRoute>
						<LabLogisticSupply />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/lab_biosafety/:lab_profileId/"
				element={
					<ProtectedRoute>
						<LabBiosafetyBiosecurity />
					</ProtectedRoute>
				}
			/>

			{/* lab_comms_reports */}

			<Route
				path="/lab_comms_reports/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabCommReports />
					</ProtectedRoute>
				}
			/>


			{/* lab_comms_reports */}

			<Route
				path="/lab_specimen_ref/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabSpecimenRef />
					</ProtectedRoute>
				}
			/>

			{/* lab_audits */}

			<Route
				path="/lab_audits/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabAdudit />
					</ProtectedRoute>
				}
			/>
			{/* Laboratory Profile Section */}

			{/* <Route
                path="/lab_tests/:lab_profileId/"
                element={
                <ProtectedRoute>
                    <LabTests />
                </ProtectedRoute>
                }
            /> */}
			{/* Route for LabTestsBiochemistry */}
			<Route
				path="/lab_tests/biochemistry/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsBiochemistry />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsBloodBank */}
			<Route
				path="/lab_tests/bloodbank/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsBloodBank />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsCytology */}
			<Route
				path="/lab_tests/cytology/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsCytology />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsHaematology */}
			<Route
				path="/lab_tests/haematology/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsHaematology />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsImmunology */}
			<Route
				path="/lab_tests/immunology/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsImmunology />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsMicrobiology */}
			<Route
				path="/lab_tests/microbiology/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsMcrobiology />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsMolecular */}
			<Route
				path="/lab_tests/molecular/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsMolecular />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsParasitology */}
			<Route
				path="/lab_tests/parasitology/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsParasitology />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsPathology */}
			<Route
				path="/lab_tests/pathology/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsPathology />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsSerology */}
			<Route
				path="/lab_tests/serology/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsSerology />
					</ProtectedRoute>
				}
			/>
			{/* Route for LabTestsSpecialTest */}
			<Route
				path="/lab_tests/specialtest/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabTestsSpecialTest />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/logistics_and_supplychain_management/:lab_profileId"
				element={
					<ProtectedRoute>
						<LogisticsAndSupplyChain />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/lab_mentorship/:lab_profileId"
				element={
					<ProtectedRoute>
						<LabMentorship />
					</ProtectedRoute>
				}
			/>
			
			

			{/* SADCAS F134 A */}

			<Route
				path="/sadcas_a"
				element={
					<ProtectedRoute>
						<SadcasA />
					</ProtectedRoute>
				}
			/>
			{/* SADCAS F134 B */}

			<Route
				path="/sadcas_b"
				element={
					<ProtectedRoute>
						<SadcasB />
					</ProtectedRoute>
				}
			/>
			

			{/* SLIPTA HOME */}

			<Route
				path="/slipta_home"
				element={
					<ProtectedRoute>
						<SliptaHome />
					</ProtectedRoute>
				}
			/>

			{/* SADCAS SUMMARY */}

			

			{/* <Route 
                path="/" 
                element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
                } 
            /> */}

			{/* Slipta Audits  */}

			<Route
				path="/slipta_lab_profile/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAudits />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Details  */}

			<Route
				path="/slipta_audit_detail/:slipta_lab_profileId/:aID/"
				element={
					<ProtectedRoute>
						<SliptaAuditsDetail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits Section 1 */}

			<Route
				path="/slipta_audit_section_1/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection1 />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audit Section 1 Details */}
			<Route
				path="/slipta_audit_section_1_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection1Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 2*/}

			<Route
				path="/slipta_audit_section_2/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection2 />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audit Section 2 Details */}
			<Route
				path="/slipta_audit_section_2_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection2Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 3*/}

			<Route
				path="/slipta_audit_section_3/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection3 />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audit Section 3 Details */}
			<Route
				path="/slipta_audit_section_3_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection3Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 4*/}
			<Route
				path="/slipta_audit_section_4/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection4 />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audit Section 4 Details */}
			<Route
				path="/slipta_audit_section_4_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection4Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 5*/}
			<Route
				path="/slipta_audit_section_5/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection5 />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audit Section 5 Details */}
			<Route
				path="/slipta_audit_section_5_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection5Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 6*/}
			<Route
				path="/slipta_audit_section_6/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection6 />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audit Section 6 Details */}
			<Route
				path="/slipta_audit_section_6_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection6Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 7*/}
			<Route
				path="/slipta_audit_section_7/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection7 />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audit Section 7 Details */}
			<Route
				path="/slipta_audit_section_7_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection7Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 8*/}
			<Route
				path="/slipta_audit_section_8/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection8 />
					</ProtectedRoute>
				}
			/>
			{/* Slipta Audit Section 8 Details */}
			<Route
				path="/slipta_audit_section_8_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection8Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 9*/}
			<Route
				path="/slipta_audit_section_9/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection9 />
					</ProtectedRoute>
				}
			/>
			{/* Slipta Audit Section 9 Details */}
			<Route
				path="/slipta_audit_section_9_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection9Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 10*/}
			<Route
				path="/slipta_audit_section_10/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection10 />
					</ProtectedRoute>
				}
			/>
			{/* Slipta Audit Section 10 Details */}
			<Route
				path="/slipta_audit_section_10_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection10Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 11*/}
			<Route
				path="/slipta_audit_section_11/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection11 />
					</ProtectedRoute>
				}
			/>
			{/* Slipta Audit Section 11 Details */}
			<Route
				path="/slipta_audit_section_11_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection11Detail />
					</ProtectedRoute>
				}
			/>

			{/* Slipta Audits  Section 12*/}
			<Route
				path="/slipta_audit_section_12/:slipta_lab_profileId/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection12 />
					</ProtectedRoute>
				}
			/>
			{/* Slipta Audit Section 12 Details */}
			<Route
				path="/slipta_audit_section_12_detail/:slipta_lab_profileId/:qID/"
				element={
					<ProtectedRoute>
						<SliptaAuditSection12Detail />
					</ProtectedRoute>
				}
			/>

			{/* Login */}

			<Route path="/login/" element={<Login />} />
			<Route path="/register/" element={<Registration />} />


			<Route
				path="/sadcas_a_summary/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasASummary />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/sadcas_a_intro/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasAIntro />
					</ProtectedRoute>
				}
			/>		

			<Route
				path="/sadcas_a_general/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasAGeneral />
					</ProtectedRoute>
				}
			/>			

			<Route
				path="/sadcas_a_structural/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasAStructural />
					</ProtectedRoute>
				}
			/>	

			<Route
				path="/sadcas_a_resource/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasAResource />
					</ProtectedRoute>
				}
			/>	

			<Route
				path="/sadcas_a_pre_exam/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasAPreExam/>
					</ProtectedRoute>
				}
			/>		

		<Route
				path="/sadcas_a_management/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasAManSys/>
					</ProtectedRoute>
				}
			/>

		<Route
				path="/sadcas_a_submit/:lab_profileId/"
				element={
					<ProtectedRoute>
						< SadcasASubmit/>
					</ProtectedRoute>
				}
			/>		

		
			{/* SADCAS B SUMMARY */}
			<Route
				path="/sadcas_b_summary/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBSummary />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/sadcas_b_intro/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBIntro />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_reqs_reports/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBReqsReports />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_req_provide_lab_exams/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBReqProvideLabExams />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_sample_receipt/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBSampleReceipt />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_fac_envs/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBFacEnvs />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_exam_processes/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBExamProcesses />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_ensure_val_exams/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBEnsureValExams />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_equipment/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBEquipment />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_reagents_and_consumables/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadCASBReagentsConsumeables />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_personnel/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBPersonnel />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_personnel/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBPersonnel />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_process_requirements/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBProcessRequirements />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_non_conforming_work/:lab_profileId/"
				element={
					<ProtectedRoute>
						<SadcasBNonConformingWork />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/sadcas_b_submit/:lab_profileId/"
				element={
					<ProtectedRoute>
						< SadcasBSubmit/>
					</ProtectedRoute>
				}
			/>		

		


		</Routes>
	)
}

export default Routing
