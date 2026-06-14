<!-- source: https://www.zoho.com/zeptomail/help/file-cache.html -->

# File Cache

You may want to add attachments or images to your transactional emails. While these files may be stored locally on your device, ZeptoMail provides a File Cache section where you can upload and manage them. Using File Cache allows you to store, organize, and reuse files from a centralized location.

Once a file is uploaded, ZeptoMail automatically assigns a File Cache Key. You can use this key in your API or SMTP configuration to include the file as an inline image or attachment in your emails.

Points to note:

- The total email size which includes your email headers, body content, inline images, and attachments **should NOT exceed 15 MB**
- The total file cache storage capacity for an account is 1GB.
- ZeptoMail does not support the following extensions as attachments:
- ade, adp, bat, chm, cmd, com, cpl, exe, hta, ins, isp, js, jse, lib, lnk, mde, msc, msp, mst, pif, scr, sct, shb, sys, vb, vbe, vbs, vxd, wsc, wsf, wsh, app, asp, bas, cer, cnt, crt, csh, der, fxp, gadget, hlp, hpj, inf, ksh, mad, maf, mag, mam, maq, mar, mas, mat, mau, mav, maw, mda, mdb, mdt, mdw, mdz, msh, msh1, msh2, msh1xml, msh2xml, msi, msp, ops, osd, pcd, plg, prf, prg, pst, reg, scf, shs, ps1, ps1xml, ps2, ps2xml, psc1, psc2, tmp, url, vbp, vsmacros, vsw, ws, xnk.

#### Table of Contents

- [Upload your attachment](https://www.zoho.com/zeptomail/help/file-cache.html#upload)
- [Search an attachment](https://www.zoho.com/zeptomail/help/file-cache.html#search)
- [Delete your attachment](https://www.zoho.com/zeptomail/help/file-cache.html#delete)

## **Upload your attachment:**

1. From the left pane, select the Agent in which the attachment has to be uploaded.
2. Navigate to **File Cache** tab. All the uploaded files will be listed here.



![File cache section](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/filecache-section.png)

3. Click on **Upload Files** in the top-right corner. The upload files pop-up will appear.



![Upload file cache](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/filecache-upload.png)

4. Add the desired files either by dragging and dropping or browsing for files in your device. You can add more than one file at a time.



![File cache upload files popup screenshot](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/cache-attach.png)

5. Once you have selected the required files, click **Attach** to upload the files to the File Cache section.
6. A unique File Cache Key is generated for every uploaded file. You can use the desired attachment's Key while sending emails using API.



![File cache key](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/fc-key.png)

**Note:**

You can use the files in File Cache as attachments while sending emails using SMTP too. Add **X-TM-FILE-KEY** parameter to the header and enter the **File Cache Key** as the parameter value.

Example: Multiple file cache keys without name - **message.addHeader("X-TM-FILE-KEY", "filecachekey,filecachekey")**; Multiple file cache keys with name - **message.addHeader("X-TM-FILE-KEY", "filecachekey:name,filecachekey:name")**;

## **Search an attachment**

You can search a particular attachment using the **Search** option. To do so:

1. Select the desired Agent from the left pane.
2. Navigate to the File Cache tab.
3. Click on the **Select Criteria** drop-down box. Choose the condition based on which you wish to search — File name or File cache key.



![Filter file cache](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/filecache-filter.png)

4. Enter the entire filename. For example, if the filename is "attachment", search for the filename along with the extension — filename.png and click the Search icon.



![Search file cache](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/filecache-search.png)

5. The values will be fetched and displayed.

## **Delete your attachment**

1. From the left pane, select the desired Agent where the attachment has to be deleted.
2. Navigate to File Cache tab. Here, you can view the uploaded files.
3. Hover over the file you want to delete. Click the delete icon on the right. Once an image or attachment is deleted, it cannot be recovered.



![Delete file cache](https://www.zohowebstatic.com/sites/zweb/images/zeptomail/fc-delete.png)​

Before you get started it is important to know that ZeptoMail is for sending transactional emails like welcome emailers, password resets emails, OTPs. We do not support sending of bulk emails or promotional emails like newsletters or marketing campaign emails. If you are looking for a bulk email provider, check out [Zoho Campaigns](https://www.zoho.com/campaigns/).
