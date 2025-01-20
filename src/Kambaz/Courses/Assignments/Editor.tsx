export default function AssignmentEditor() {
     return (
       <div id="wd-assignments-editor">
         <label htmlFor="wd-name">Assignment Name</label>
         <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
         <textarea id="wd-description">
           The assignment is available online Submit a link to the landing page of
         </textarea>
         <br />
         <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due Date</label>
          </td>
          <td>
            <input id="wd-due-date" value="January 25, 2025" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
          <td>
            <input id="wd-wesite-url" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Group</label>
          </td>
          <td>
            <input id="wd-group" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
          <td>
            <input id="wd-media recordings" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">This Assignment is available from:</label>
          </td>
          <td>
            <input id="wd-available-from" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
          <td>
            <input id="wd-student-annotation" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">This assignment is available until:</label>
          </td>
          <td>
            <input id="wd-available-until" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <input id="wd-submission-type" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
          <td>
            <input id="wd-file-upload" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-name">File Name</label>
          </td>
          <td>
            <input id="wd-name" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
          <td>
            <input id="wd-text-entry" value="" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign this to:</label>
          </td>
          <td>
            <input id="wd-assign-to" value="" />
          </td>
        </tr>



      </table>
    </div>
);}
