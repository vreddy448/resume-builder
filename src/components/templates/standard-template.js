import React from 'react';
import { connect } from 'react-redux';
import ButtonConatiner from "../button-container";
import { PDFDownloadLink, PDFViewer,  Page, Text, View, Font, Document, StyleSheet } from '@react-pdf/renderer';
import { achievements, personalDetails, declaration } from "../../common/data";
import {isMobile} from "../../common/common";

const StandardTemplate = (props) => {

    // Register font
    Font.register(
        'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
        { family: 'Oswald' }
    );
    Font.register(`${__dirname}/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`, {
        family: 'Open Sans',
    });
    Font.register(`${__dirname}/fonts/fonts/Lato/Lato-Regular.ttf`, {
        family: 'Lato',
    });
    Font.register(`${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`, {
        family: 'Lato Italic',
    });
    Font.register(`${__dirname}/fonts/fonts/Lato/Lato-Bold.ttf`, {
        family: 'Lato Bold',
    });

    const styles = StyleSheet.create({
        page: {
            paddingTop: 20,
            paddingBottom: 15,
            paddingRight: 15,
            paddingLeft: 15
        },
        flexDirection: {
            flexDirection: 'row'
        },
        contactSection: {
            flexDirection: 'row',
            paddingBottom: 8,
            paddingTop: 8,
        },
        contactCommon: {
            fontWeight: "100",
            fontSize: "12",
            fontFamily: 'Times-Roman'
        },
        title: {
            textAlign: "center",
            marginTop: "8px",
            marginBottom: 5,
            fontSize: 20,
            fontWeight: "400",
            fontFamily: 'Times-Roman'
        },
        line: {
            borderBottomWidth: 1,
            borderBottomColor: '#808080',
            borderBottomStyle: 'solid',
        },
        silverLine: {
            borderBottomWidth: 1,
            borderBottomColor: '#C0C0C0',
            borderBottomStyle: 'solid',
        },
        leftColumn: {
            flexDirection: 'column',
            flexGrow: 9,
        },
        rightColumn: {
            flexDirection: 'column',
            flexGrow: 1,
            alignItems: 'flex-end',
            justifySelf: 'flex-end',
        },
        top5: {
            marginTop: 5
        },
        sectionTitle: {
            textAlign: "center",
            paddingTop: 10,
            paddingBottom: 0,
            fontSize: 16,
            fontWeight: "400",
            fontFamily: 'Times-Roman'
        },
        sectionTitleCommon : {
            paddingBottom: 8,
            paddingTop: 8
        },
        companyTitleSection: {

        },
        companyTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontFamily: 'Times-Roman'
        },
        companyPosition: {
            fontWeight: "100",
            fontSize: 12,
            fontFamily: 'Times-Roman'
        },
        companyDetails: {
            fontWeight: "100",
            fontSize: 12,
            fontFamily: 'Times-Roman',
            marginTop: 5
        },
        skillSetSection: {
            paddingTop: 2,
            paddingBottom: 2
        },
        skillTitle: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: 'Times-Roman'
        },
        skillSet: {
            fontSize: 12,
            fontWeight: '100',
            fontFamily: 'Times-Roman'
        },
        certificationsSection: {
            paddingTop: 10,
        },
        certificateTitle: {
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: 'Times-Roman',
            paddingBottom: 10
        },
        personalDetails: {
            flexDirection: 'row',
            paddingBottom: 4,
            paddingTop: 4,
        },
        declaration: {
            marginTop: 10,
            paddingLeft: 5,
            paddingBottom: 5,
            fontSize: 12,
            fontWeight: "bold",
            fontFamily: 'Times-Roman',
        },
        personalDetailsSection: {
            paddingTop: 5
        }
    });

    return (
        <div>
            <ButtonConatiner displayPrevious={true} displayNext={false} previous={props.previous}  next={props.next}/>
            {
                console.log("isMobile", isMobile)
            }
            {
                isMobile &&
                <PDFDownloadLink document={document(props, styles)} fileName="Resume.pdf">
                     {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                </PDFDownloadLink>

            }
            {
                !isMobile &&
                <PDFViewer width="100%" height={800}>
                        {document(props, styles)}
                </PDFViewer>
            }
        </div>
    )
};


const document = (props, styles) => {
    return (
        <Document>
            <Page {...props} style={styles.page} size="A4">
                <View>
                    {/* Resume Header Title */}
                    <View style={[styles.line]} wrap={false}>
                        <Text style={styles.title}>{props.primaryDetails.firstName} {props.primaryDetails.lastName}</Text>
                    </View>
                    {/* Contact Section */}
                    <View style={[styles.contactSection, styles.silverLine]} wrap={false}>
                        <View style={[styles.leftColumn, styles.contactCommon]}>
                            <Text>{props.primaryDetails.addressLine1} {props.primaryDetails.addressLine2}</Text>
                            <Text style={styles.top5}>{props.primaryDetails.city}, {props.primaryDetails.state}, {props.primaryDetails.zipCode}</Text>
                        </View>
                        <View style={[styles.rightColumn, styles.contactCommon]} >
                            <Text>{props.primaryDetails.emailId}</Text>
                            <Text style={styles.top5}>{props.primaryDetails.phone}</Text>
                        </View>
                    </View>
                    {/* Education Section */}
                    <View style={styles.silverLine} wrap={false}>
                        <View style={styles.line}>
                            <Text style={styles.sectionTitle}>Education</Text>
                        </View>
                        {Education(props.educationDetails, styles)}
                    </View>
                    {/* Experience Section */}
                    <View style={styles.silverLine} wrap={false}>
                        <View style={styles.line}>
                            <Text style={styles.sectionTitle}>Experience</Text>
                        </View>
                        {Experience(props.experienceDetails, styles)}
                    </View>
                    {/* Technical Skills Section */}
                    <View style={styles.silverLine} wrap={false}>
                        <View style={styles.line}>
                            <Text style={styles.sectionTitle}>Technical Skills</Text>
                        </View>
                        {TechnicalSkills(props.skills, styles)}
                    </View>
                    {/* Certifications Section */}
                    {props.certifications
                    && props.certifications.length > 0
                    &&
                    <View style={styles.silverLine} wrap={false}>
                        <View style={styles.line}>
                            <Text style={styles.sectionTitle}>Certifications</Text>
                        </View>
                        {Certifications(props.certifications, styles)}
                    </View>
                    }
                    {/* Achievements Section */}
                    <View style={styles.silverLine} wrap={false}>
                        <View style={styles.line}>
                            <Text style={styles.sectionTitle}>Achievements</Text>
                        </View>
                        {Achievements(styles)}
                    </View>
                    {/* Personal Details Section */}
                    <View style={styles.silverLine} wrap={false}>
                        <View style={styles.line}>
                            <Text style={styles.sectionTitle}>Personal Details</Text>
                        </View>
                        {PersonalDetails(styles)}
                    </View>
                    {/* Declaration Section */}
                    <View style={styles.silverLine} wrap={false}>
                        <View style={styles.line}>
                            <Text style={styles.sectionTitle}>Declaration</Text>
                        </View>
                        <View>
                            <Text style={styles.declaration}>{declaration.data}</Text>
                        </View>
                    </View>
                    <View wrap={false}>
                        <Text style={{marginTop: 60, fontSize: 14, textAlign: 'right'}}>
                            Venkata Reddy Sanikommu
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    )
};

const Education = (props, styles) => {
    return (
        props &&
        <View style={styles.contactSection}>
            <View style={[styles.leftColumn, styles.contactCommon]}>
                <Text>{props.degree}</Text>
                <Text style={styles.top5}>{props.school}</Text>
            </View>
            <View style={[styles.rightColumn, styles.contactCommon]} >
                <Text>{props.endMonth}, {props.endYear}</Text>
                {props.percentage && <Text style={styles.top5}>{props.percentage}</Text>}
            </View>
        </View>
    )
};

const Experience = (props, styles) => {

    return (
        props && props.map((exp, index) => {
            return (
                <View key={index} style={styles.sectionTitleCommon}>
                    <View style={styles.companyTitleSection}>
                        <Text style={styles.companyTitle}>{exp.company}</Text>
                        <Text style={styles.companyPosition}>{exp.role} ({exp.startYear} - {exp.endYear})</Text>
                    </View>
                    {exp && exp.resList && exp.resList.map((comDetails, childIndex) => {
                         return (
                             <View key={childIndex} style={styles.companyDetails}>
                                <Text style={styles.companyDetails}>&#2192; &nbsp; {comDetails}</Text>
                             </View>
                         )
                    })}
                </View>
            )
        })
    )
};

const TechnicalSkills = (props, styles) => {
    return (
        props && props.map((d, index) => {
            return (
                <View key={index} style={styles.skillSetSection}>
                    <Text>
                        {
                            d.skillGroup && d.skillGroup === "Other"
                            &&  <Text style={[styles.skillTitle]}>&#2192;   {d.otherSkillGroup} :</Text>
                        }
                        {
                            d.skillGroup && d.skillGroup !== "Other"
                            &&  <Text style={[styles.skillTitle]}>&#2192;   {d.skillGroup} :</Text>
                        }
                        &nbsp;
                        <Text style={styles.skillSet}>
                            {d.skills}
                        </Text>
                    </Text>
                </View>
            )
        })
    )
};

const Certifications = (props, styles) => {
    return (
        <View style={styles.certificationsSection}>
            {
                props && props.map((d, index) => {
                    return (
                        <Text key={index} style={[styles.certificateTitle]}>&#2192;   {d.certificationTitle} - {d.issuedBy}</Text>
                    )
                })
            }
        </View>
    )
};

const Achievements = (styles) => {
    return (
        <View style={styles.certificationsSection}>
            {
                achievements && achievements.data && achievements.data.map((d, index) => {
                    return (
                        <Text key={index} style={[styles.certificateTitle]}>&#2192;   {d.content}</Text>
                    )
                })
            }
        </View>
    )
};

const PersonalDetails = (styles) => {
    return (
        <View style={styles.personalDetailsSection}>
            {
                personalDetails && personalDetails.data && personalDetails.data.map((d, index) => {
                    return (
                        <View key={index} style={styles.personalDetails}>
                            <View style={[styles.contactCommon, {width:'50%'}]}>
                                <Text>{d.label}</Text>
                            </View>
                            <View style={styles.contactCommon} >
                                <Text>:  {d.value}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
};

function mapStateToProps(state, ownProps) {
    return {
        skills: state.skills.data,
        certifications: state.certifications.data,
        educationDetails: state.educationDetails.data,
        experienceDetails: state.experienceDetails.data,
        primaryDetails: state.form.primaryDetails.values
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StandardTemplate);