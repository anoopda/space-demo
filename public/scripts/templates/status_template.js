module.exports = [

          '<h1>Daily Status</h1>',
     '<section id ="status_view_wrapper">',     
          '<h6>Bursts</h6>',
          '<section id ="date_wrapper">',
              '<label>Date</label>',
              '<select id="date">',
                    '<option value="23/09/2016">23/09/2016</option>',
                    '<option value="24/09/2016">24/09/2016</option>',
                    '<option value="25/09/2016">25/09/2016</option>',
                    '<option value="26/09/2016">26/09/2016</option>',
              '</select>',
          '</section>',
              
          '<section id ="project_wrapper">',
                '<label>Project</label>',    
                '<select id="project">',
                      '<option value="N/A">N/A</option>',
                '</select>',
          '</section>',


          '<section id ="activity_wrapper">',
              '<label>Activity Type</label>',
              '<select id="activity_type">',
                    '<option value="0">Other</option>',
                    '<option value="1">Project management</option>',
                    '<option value="2">Training</option>',
                    '<option value="3">Architecting</option>',
                    '<option value="4">Requirements analysis</option>',
                    '<option value="5">System design</option>',
                    '<option value="6">Coding</option>',
                    '<option value="7">Graphic design</option>',
                    '<option value="8">Testing</option>',
                    '<option value="9">HTML/CSS</option>',
                    '<option value="10">Pre-sales</option>',
                    '<option value="11">Tech Support</option>',
                    '<option value="12">UX design</option>',
                    '<option value="13">Marketing</option>',
                    '<option value="14">Business Analysis</option>',
                    '<option value="15">Recruitment & HR</option>',
              '</select>',
          '</section>',


          '<section id ="time_wrapper">',
                '<label>Time Spent(hours:minutes)</label>',
                '<select id="time_hours">',
                      '<option value="0">00</option>',
                      '<option value="1">01</option>',
                      '<option value="2">02</option>',
                      '<option value="3">03</option>',
                      '<option value="4">04</option>',
                      '<option value="5">05</option>',
                      '<option value="6">06</option>',
                      '<option value="7">07</option>',
                      '<option value="8">08</option>',
                      '<option value="9">09</option>',
                      '<option value="10">10</option>',
                      '<option value="11">11</option>',
                      '<option value="12">12</option>',
                      '<option value="13">13</option>',
                      '<option value="14">14</option>',
                      '<option value="15">15</option>',
                      '<option value="16">16</option>',

                '</select>',
   

            '<select id="time_min">',
                  '<option value="0">00</option>',
                  '<option value="1">15</option>',
                  '<option value="2">30</option>',
                  '<option value="3">45</option>',
            '</select>',
         '</section>',

        '<section id ="detail_wrapper">', 
             '<textarea rows="5" column="3" maxlength="180" id="activity_description" placeholder="Use T# or t# in your description to indicate Redmine ticket/task. For example : T#1234" >',
             '</textarea>',
        '</section>', 
          
          '<button id="btn">Save</button>',
          '</section>'

          ].join('');

          





