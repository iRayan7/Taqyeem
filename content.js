console.log("ماشاء الله هكر");

let tabLink = window.location.toString();





chrome.storage.sync.get('mode', function (items) {
    // console.log(items.mode)
    if (items.mode === 'turbo') {

        // console.log(tabLink);
        if (tabLink == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces" ||
            tabLink == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces") {
            // console.log('صفحة التقييم');

            var r = document.getElementsByTagName('input');
            var i = 0;
            var vir = 11;

            for (i; i < 31; i++) {
                r[vir].checked = true;
                vir = vir + 5;
            }

            r[24].checked = true;
            r[143].checked = true;

            // clearFormHiddenParams_frm
            var curForm = document.forms['frm'];
            curForm.elements['frm:_idcl'].value = null;

            document.forms['frm']['frm:_idcl'].value = 'frm:saveEval';
            document.forms['frm'].submit();
            submitForm('/ksu');
        }

        if (tabLink == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/evaluationTypesIndex.faces" ||
            tabLink == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/evaluationTypesIndex.faces") {

            // console.log('صفحة اختيار المقرر');


            var frmAction = document.getElementById('frm').action;
            // console.log(frmAction);
            if (frmAction == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces" ||
                frmAction == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces") {

                document.getElementById("frm:index").value = 0;

                // clearFormHiddenParams_frm
                var curForm = document.forms['frm'];
                curForm.elements['frm:_idcl'].value = null;

                document.forms['frm']['frm:_idcl'].value = 'frm:_id41:0:_id44';
                document.forms['frm'].submit();
            }

            clearFormHiddenParams_frm('frm');
        }

        if (tabLink == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/evalQuestionsIndex.faces" ||
            tabLink == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/evalQuestionsIndex.faces") {
            // console.log('logged');
            var frmAction = document.getElementById('frm').action;
            // console.log(frmAction);
            if (frmAction == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces" ||
                frmAction == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces") {
                // clearFormHiddenParams_frm
                var curForm = document.forms['frm'];
                curForm.elements['frm:_idcl'].value = null;

                document.forms['frm']['frm:_idcl'].value = 'frm:_id41:0:_id44';
                document.forms['frm'].submit();
            } else {

                // console.log('صفحة الرجوع بعد التقييم');
                // clearFormHiddenParams_frm
                var curForm = document.forms['frm'];
                curForm.elements['frm:_idcl'].value = null;

                document.forms['frm']['frm:_idcl'].value = 'frm:cmdLink';
                document.forms['frm'].submit();
            }
        }

    } else {
        turbo = false;
        if (tabLink == "https://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces" ||
            tabLink == "http://edugate.ksu.edu.sa/ksu/ui/student/student_evaluation/index/activitiesInstructorsIndex.faces") {
            // console.log('صفحة التقييم والوضع نورمااال');

            var tables = document.getElementById('frm').querySelector("table:nth-child(3)").insertAdjacentHTML('beforebegin', '<table width="100%" border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td class="fontTextMain">تــــقــــيــــيــــم</td></tr><tr> <td height="5"></td></tr><tr> <td> <table width="100%" border="0" cellpadding="1" cellspacing="1"> <tbody> <tr style=" border-color: red;"> <td width="3" class="HEADING" style=" background: #0c4463;">&nbsp;</td><th class="HEADING" style=" background: #0c4463;"> <div align="right"> الخيارات </div></th> <th class="HEADING" style=" background: #0c4463;"> لا أوافق مطلقاً </th> <th class="HEADING" style=" background: #0c4463;"> لا أوافق </th> <th class="HEADING" style=" background: #0c4463;"> أوافق إلى حد ما </th> <th class="HEADING" style=" background: #0c4463;"> أوافق </th> <th class="HEADING" style=" background: #0c4463;"> أوافق بشدة </th> </tr><tr> <td width="3" class="ROW1">&nbsp;</td><td align="right" class="ROW1"> <div align="right"> 1&nbsp;-&nbsp; &nbsp;اختر واحد من الخيارات لاختياره للبقية </div></td><td align="center" class="ROW1"> <input class="tq" type="radio" name="tq" id="tq1" value="1"> </td><td align="center" class="ROW1"> <input class="tq" type="radio" name="tq" id="tq2" value="2"> </td><td align="center" class="ROW1"> <input class="tq" type="radio" name="tq" id="tq3" value="3"> </td><td align="center" class="ROW1"> <input class="tq" type="radio" name="tq" id="tq4" value="4"> </td><td align="center" class="ROW1"> <input class="tq" type="radio" name="tq" id="tq5" value="5"> </td></tr></tbody> </table> </td></tr></tbody></table>');

            var start = 6;
            var r = document.getElementsByTagName('input');

            document.getElementById('tq1').addEventListener('click', function () {

                var i = 0;
                var vir = 1 + start;

                for (i; i < 32; i++) {
                    r[vir].checked = true;
                    vir = vir + 5;
                }

                r[29].checked = true;
                r[148].checked = true;
            })
            document.getElementById('tq2').addEventListener('click', function () {

                var i = 0;
                var vir = 2 + start;

                for (i; i < 32; i++) {
                    r[vir].checked = true;
                    vir = vir + 5;
                }
                r[29].checked = true;
                r[148].checked = true;

            })
            document.getElementById('tq3').addEventListener('click', function () {

                var i = 0;
                var vir = 3 + start;

                for (i; i < 32; i++) {
                    r[vir].checked = true;
                    vir = vir + 5;
                }
                r[29].checked = true;
                r[148].checked = true;

            })
            document.getElementById('tq4').addEventListener('click', function () {

                var i = 0;
                var vir = 4 + start;

                for (i; i < 32; i++) {
                    r[vir].checked = true;
                    vir = vir + 5;
                }
                r[29].checked = true;
                r[148].checked = true;
            })
            document.getElementById('tq5').addEventListener('click', function () {

                var i = 0;
                var vir = 5 + start;

                for (i; i < 32; i++) {
                    r[vir].checked = true;
                    vir = vir + 5;
                }

                r[29].checked = true;
                r[148].checked = true;

            })
            

        }
    }
});
