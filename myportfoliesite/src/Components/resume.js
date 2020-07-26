import React, {Component} from 'react';
import {Button} from 'react-mdl';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../Assets/omer.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component{

    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      };

      goToPrevPage = () =>
        this.setState(state => ({ pageNumber: 1 }));

      goToNextPage = () =>
        this.setState(state => ({ pageNumber: 2 }));

    render(){
        const { pageNumber, numPages } = this.state;
        return(
            <div className="resume-body">
               <nav>
                    <Button raised colored onClick={this.goToPrevPage}>Page 1</Button>
                    <Button raised colored onClick={this.goToNextPage}>Page 2</Button>
                 </nav>
                 <div className="resume-document">
                    <Document
                        file={resume}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={'700'} />
                    </Document>
                    <p>
                    Page {pageNumber} of {numPages}
                </p>
                 </div>
                 
            </div>
        );
    }
}

export default Resume;