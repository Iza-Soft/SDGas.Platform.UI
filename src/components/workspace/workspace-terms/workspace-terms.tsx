import { useTheme } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";
import style from "./style.module.css";
import { GrClose } from "react-icons/gr";

const WorkspaceTerms = forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => {
    return { handleClickOpen };
  });

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        <div className={style.header}>
          Terms & Conditions{" "}
          <a href="#" onClick={handleClose}>
            <GrClose style={{ float: "right" }} />
          </a>
        </div>
      </DialogTitle>
      <DialogContent>
        <div className="row">
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>1.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                For the purpose of these terms & conditions the following words
                shall have the following meanings:
              </DialogContentText>
            </div>
          </div>
          <div className="pt-10">
            <DialogContentText>
              <li style={{ paddingLeft: "25px" }}>
                “The Company” shall mean SD Gas Services.
              </li>
              <li style={{ paddingLeft: "25px" }}>
                “The Customer” shall mean the person or organisation for whom
                the Company agrees to carry out works &/or supply materials.
              </li>
              <li style={{ paddingLeft: "25px" }}>
                “The Operative” or “Engineer” shall mean the representative
                appointed by the Company.
              </li>
            </DialogContentText>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>2.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                The Company reserves the right to refuse or decline work at its
                own discretion. Where the Company agrees to carry out works for
                the Customer those works shall be undertaken by the designated
                operative of the Company at its absolute discretion.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>3.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                <b>HOURLY RATE WORK.</b> The total charge to the Customer shall
                consist of the cost of materials supplied by the Company (not
                exceeding the trade purchase price of materials + 20%) & the
                amount of time spent by the operative in carrying out works
                charged in accordance with the Company’s current hourly rates.
                The Customer shall only be charged for the time spent related to
                the Customer’s work, all other time, personal mobile calls etc.
                is non-chargeable. All charges are subject to VAT at the
                prevailing rate except in cases where the work carried out is
                zero rated.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>4.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                <b>FIXED PRICE WORK.</b> shall be given as a firm cost,
                (manifest errors exempted) including Labour & Materials. All
                costs are plus VAT at the prevailing rate.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>5.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                Where a written estimate has been supplied to the Customer the
                total charge to the Customer referred to in the estimate should
                not exceed the actual time taken by more than 20% but may be
                revised in the following circumstances:
              </DialogContentText>
            </div>
          </div>
          <div className="pt-10">
            <DialogContentText>
              <li style={{ paddingLeft: "25px" }}>
                if after submission of the estimate the Customer instructs the
                Company (whether orally or in writing) to carry out additional
                works not referred to in the estimate
              </li>
              <li style={{ paddingLeft: "25px" }}>
                if after submission of the estimate there is an increase in the
                price of materials.
              </li>
              <li style={{ paddingLeft: "25px" }}>
                if after submission of the estimate it is discovered that
                further works need to be carried out which were not anticipated
                when the estimate was prepared.
              </li>
              <li style={{ paddingLeft: "25px" }}>
                if after submission of the estimate it is discovered that there
                was a manifest error when the estimate was prepared.
              </li>
              <li style={{ paddingLeft: "25px" }}>
                should a detailed Insurance Report be required in addition to
                the estimate and invoice then this will incur a nominal charge
                of £25.00.
              </li>
            </DialogContentText>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>6.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                The Company shall not be under any obligation to provide an
                estimate to the Customer & shall only be bound (subject as
                hereinafter) by estimates given in writing to the Customer &
                signed by a duly authorised representative of the Company. The
                Company shall not be bound by any estimates given orally or in
                which manifest errors occur.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>7.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                Invoices are due for payment within 14 days from delivery to the
                Customer. Any part of that invoice which remains unpaid shall
                carry interest at the rate of 4% over the base rate until
                payment in full is received by the Company.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>8.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                Where the date &/or time for works to be carried out is agreed
                by the Company with the Customer, then the Company shall use its
                best endeavours to ensure that the operative shall attend on the
                date & at the time agreed. However, the Company accepts no
                liability in respect of the non attendance or late attendance on
                site of the operative/engineer or for the late or non delivery
                of materials.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>9.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                The Customer shall accept sole liability to discharge the
                Company’s account unless he/she discloses to the Company when
                initially instructing the Company to carry out work &/or supply
                materials that he/she is acting on behalf of a third party
                (including, but not limited to, a Limited Company or
                partnership) & receiving a written estimate) the name of the
                third party appears on the written estimate.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>10.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                If the Customer cancels their instructions prior to any work
                being carried out or materials supplied then the Customer shall
                be liable for any related expenditure together with the profit
                that would have been made by the Company had the work been
                carried out &/or materials supplied in accordance with such
                instructions.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>11.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                If, after the Company shall have carried out the works, the
                Customer is not wholly satisfied with the works then the
                Customer shall give notice in writing within 12 months to the
                Company & shall afford the Company, and its insurers, the
                opportunity of both inspecting such works, & carrying out any
                necessary remedial works if appropriate. The Customer accepts
                that if he/she fails to notify the Company as aforesaid then the
                Company shall not be liable in respect of any defects in the
                works carried out.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>12.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                The Guarantee shall be for labour only in respect of faulty
                workmanship for 12 months from the date of completion with the
                manufacturers warranty in force. The Guarantee will become null
                & void if the work/appliance completed/supplied by the Company
                is:
              </DialogContentText>
            </div>
          </div>
          <div className="pt-10" style={{ paddingLeft: "14px" }}>
            <DialogContentText>
              <li style={{ paddingLeft: "25px" }}>
                Subject to misuse or negligence.
              </li>
              <li style={{ paddingLeft: "25px" }}>
                Repaired, modified or tampered with by anyone other than a
                Company operative. The Company will accept no liability for, or
                guarantee suitability, materials supplied by the Customer & will
                accept no liability for any consequential damage or fault.
              </li>
            </DialogContentText>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>13.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                The company will not guarantee any work in respect of blockages
                in waste & drainage systems etc.
              </DialogContentText>
              <DialogContentText className="pt-20">
                The company will not guarantee any work undertaken on
                instruction from the customer & against the written or verbal
                advice of the operative/engineer. Work is guaranteed only in
                respect of work directly undertaken by the company & payment in
                full has been made. Any non-related faults arising from
                recommended work which has not been undertaken by the company
                will not be guaranteed. The company shall not be held liable or
                responsible for any damage or defect resulting from work not
                fully guaranteed or where recommended work has not been carried
                out. Work will not carry a guarantee where the customer has been
                notified by the operative either verbally or in Comments/
                Recommendations of any other related work which requires
                attention. The customer shall be solely liable for any hazardous
                situation in respect of Corgi Regulations or Gas Warning Notice
                issued.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>14.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                Where the Company agrees to carry out works on installations of
                inferior quality or over ten years old at that date no warranty
                is given in respect of such works & the Company accepts no
                liability in respect of the effectiveness of such works or
                otherwise.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>15.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                Engineers operate under their own Corgi Registration & as such
                are solely responsible for any Gas related work & subsequent
                liability.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>16.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                The Company shall be entitled to fully recover costs or damages
                from any operative/engineer/contractor whose negligence or
                faulty workmanship results in the Company being made liable for
                those damages or rectification of the work.
              </DialogContentText>
            </div>
          </div>
          <div className="pt-20" style={{ display: "flex" }}>
            <div>
              <DialogContentText>
                <b>17.</b>
              </DialogContentText>
            </div>
            <div style={{ paddingLeft: "10px" }}>
              <DialogContentText>
                These terms & conditions may not be released, discharges,
                supplemented, interpreted, varied or modified in any manner
                except by an instrument in writing signed by a duly authorised
                representative of the Company & by the Customer. Further, these
                terms & conditions shall prevail over any terms & conditions
                used by the Customer or contained or set out or referred to in
                any documentation sent by the Customer to the Company; by
                entering into contact with the Company the Customer agrees
                irrevocably to waive the application of any such terms &
                conditions.
              </DialogContentText>
            </div>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <div className="p-10">
          <a href="#" className="btn" onClick={handleClose}>
            Close
          </a>
        </div>
      </DialogActions>
    </Dialog>
  );
});

export default WorkspaceTerms;
