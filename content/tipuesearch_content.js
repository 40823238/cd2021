var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 倉儲: https://github.com/40823238/cd2021 \n \xa0 \xa0 \xa0 \xa0 https://fossil.kmol.info/u/40823238/dir?ci=tip \n \xa0 \xa0 \xa0 \xa0 https://gitlab.com/40823238/cd2021 \n \xa0 \xa0 \xa0 \xa0 https://fossil.kmol.info:3443/40823238/cd2021 \n stage1-bg3 :40823238，40823218 \n stage2-bg7 :40823238，40823218 ，40823216，40823211 \n stage3-bg6 :40823211，40823214，40823216，40823218 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa040823225，40823238，40823247，40823248 \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'stage1', 'text': '', 'tags': '', 'url': 'stage1.html'}, {'title': 'W1', 'text': '\n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '\n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '\n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '', 'tags': '', 'url': 'W4.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': 'W5', 'text': '2A各組影片', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': 'ssh \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W9', 'text': 'https://40823218.github.io/stage2-bg7/content/w9%E7%B9%AA%E8%A3%BD%E9%9B%B6%E4%BB%B6%E5%9C%96.html \n \n \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W7-webhook', 'text': '\n \n', 'tags': '', 'url': 'W7-webhook.html'}, {'title': 'GITHUB鎖爛', 'text': '\n 6/23以解鎖 \n', 'tags': '', 'url': 'GITHUB鎖爛.html'}, {'title': 'W14-task1', 'text': '\n def stage32b(num):\n     if num[0:3] == "407":\n         return "s" + "num"\n     elif num == "40823231":\n         return "num" + "-2"\n     else :\n         return num\n \nteamb = []\n \nwith open("stage3_2b.txt") as fh:\n     \n    data = fh.readlines()\n \nfor i in range(len(data)):\n    group = data[i].rstrip("\\n").split("\\t")\n    teamb.append(group)\n  \noutput = ""        \nseperator = "-"*10 + "<br />"\n \nfor i in teamb[0:]:\n    team = i[0]\n    leader = stage32b(i[1])\n    m1 = stage32b(i[3])\n    m2 = stage32b(i[5])\n    m3 = stage32b(i[7])\n    m4 = stage32b(i[9])\n    m5 = stage32b(i[11])\n    m6 = stage32b(i[13])\n       \n    try:\n        m7 = stage32b(i[15])\n    except:\n        m7 = ""\n    try:\n        m8 = stage32b(i[17])\n    except:\n        m8 = ""\n           \n    leaderrepo = "<a href=\'http://github.com/" + leader + "/cd2021\'>" + leader + " repo</a>"\n    leadersite = "<a href=\'http://" + leader + ".github.io/cd2021\'>" + leader +  " site</a>"\n    m1repo = "<a href=\'http://github.com/" + m1 + "/cd2021\'>" + m1 + " repo</a>"\n    m1site = "<a href=\'http://" + m1 + ".github.io/cd2021\'>" + m1 +  " site</a>"\n    m2repo = "<a href=\'http://github.com/" + m2 + "/cd2021\'>" + m2 + " repo</a>"\n    m2site = "<a href=\'http://" + m2 + ".github.io/cd2021\'>" + m2 +  " site</a>"\n    m3repo = "<a href=\'http://github.com/" + m3 + "/cd2021\'>" + m3 + " repo</a>"\n    m3site = "<a href=\'http://" + m3 + ".github.io/cd2021\'>" + m3 +  " site</a>"\n    m4repo = "<a href=\'http://github.com/" + m4 + "/cd2021\'>" + m4 + " repo</a>"\n    m4site = "<a href=\'http://" + m4 + ".github.io/cd2021\'>" + m4 +  " site</a>"\n    m5repo = "<a href=\'http://github.com/" + m5 + "/cd2021\'>" + m5 + " repo</a>"\n    m5site = "<a href=\'http://" + m5 + ".github.io/cd2021\'>" + m5 +  " site</a>"\n    m6repo = "<a href=\'http://github.com/" + m6 + "/cd2021\'>" + m6 + " repo</a>"\n    m6site = "<a href=\'http://" + m6 + ".github.io/cd2021\'>" + m6 +  " site</a>"\n    \n   \n    teamrepo = "<a href=\'http://github.com/" + leader + "/" + team + "\'>" + team + " repo</a>"\n    teamsite =  "<a href=\'http://" + m1 + ".github.io/" + team + "\'>" + team +  " site</a>"\n   \n    output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site + " | " +m4repo + " | " + m4site + " | " +m5repo + " | " + m5site + " | " +m6repo + " | " + m6site \n       \n    if m7 != "":\n       m7repo = "<a href=\'http://github.com/" + m7 + "/cd2021\'>" + m7 + " repo</a>"\n       m7site = "<a href=\'http://" + m7 + ".github.io/cd2021\'>" + m7 +  " site</a>"  \n       output += " |  " + m7repo + "| " + m7site\n    else:\n        output += "" \n       \n    if m8 != "":\n       m8repo = "<a href=\'http://github.com/" + m8 + "/cd2021\'>" + m8 + " repo</a>"\n       m8site = "<a href=\'http://" + m8 + ".github.io/cd2021\'>" + m8 +  " site</a>"  \n       output += " |  " + m8repo + "| " + m8site + "<br />" + seperator\n    else:\n        output += "<br />" + seperator\n   \n   \nprint(output) \n stage3-bg1 repo  |  stage3-bg1 site  |  40823245 repo  |  40823245 site  |  40823251 repo  |  40823251 site  |  40823208 repo  |  40823208 site  |  40823213 repo  |  40823213 site  |  40823232 repo  |  40823232 site  |  40823234 repo  |  40823234 site  |  40823235 repo  |  40823235 site  |  40823246 repo |  40823246 site ---------- stage3-bg2 repo  |  stage3-bg2 site  |  40823217 repo  |  40823217 site  |  40823201 repo  |  40823201 site  |  40823209 repo  |  40823209 site  |  40823210 repo  |  40823210 site  |  40823206 repo  |  40823206 site  |  40823207 repo  |  40823207 site  |  40823223 repo  |  40823223 site  |  40823224 repo |  40823224 site ---------- stage3-bg3 repo  |  stage3-bg3 site  |  40823236 repo  |  40823236 site  |  40823202 repo  |  40823202 site  |  40823203 repo  |  40823203 site  |  40823212 repo  |  40823212 site  |  40823219 repo  |  40823219 site  |  40823222 repo  |  40823222 site  |  num-2 repo  |  num-2 site  |  40823244 repo |  40823244 site ---------- stage3-bg4 repo  |  stage3-bg4 site  |  40823239 repo  |  40823239 site  |  snum repo  |  snum site  |  snum repo  |  snum site  |  snum repo  |  snum site  |  snum repo  |  snum site  |  snum repo  |  snum site  |  snum repo  |  snum site  |  snum repo |  snum site ---------- stage3-bg5 repo  |  stage3-bg5 site  |  40823221 repo  |  40823221 site  |  40823204 repo  |  40823204 site  |  40823205 repo  |  40823205 site  |  40823220 repo  |  40823220 site  |  40823228 repo  |  40823228 site  |  40823237 repo  |  40823237 site  |  40823242 repo  |  40823242 site  |  40823250 repo |  40823250 site  |  40832244 repo |  40832244 site ---------- stage3-bg6 repo  |  stage3-bg6 site  |  40823225 repo  |  40823225 site  |  40823214 repo  |  40823214 site  |  40823218 repo  |  40823218 site  |  40823211 repo  |  40823211 site  |  40823248 repo  |  40823248 site  |  40823247 repo  |  40823247 site  |  40823216 repo  |  40823216 site  |  40823238 repo |  40823238 site ---------- stage3-bg7 repo  |  stage3-bg7 site  |  40623144 repo  |  40623144 site  |  40823233 repo  |  40823233 site  |  snum repo  |  snum site  |  40823241 repo  |  40823241 site  |  40423155 repo  |  40423155 site  |  40823227 repo  |  40823227 site  |  snum repo  |  snum site ---------- \n GITHUB鎖爛 <<  Previous   Next  >> W16 \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.   Copyright ©\n \nAll rights reserved | This template is made with   by  Colorlib    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n \n  啟用 LaTeX equations 編輯  \n \n  <script>\n  MathJax = {\n    tex: {inlineMath: [[\'$\', \'$\'], [\'\\(\', \'\\)\']]}\n  };\n  </script>\n  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script> \n \n', 'tags': '', 'url': 'W14-task1.html'}, {'title': 'W16', 'text': '', 'tags': '', 'url': 'W16.html'}, {'title': '影片', 'text': '\n 檔案在影片下方資訊處可下載 \n', 'tags': '', 'url': '影片.html'}, {'title': '程式碼', 'text': 'function moove(x,y)\n    a=0.4\n    b=0.4\n    c=math.pow((math.pow(x,2)+math.pow(y,2)),0.5)\n    s=(a+b+c)/2\n    area=math.pow((s*(s-a)*(s-b)*(s-c)),0.5)\n    h=area/(2*c)\n    deg1_base=math.atan(x/y)\n    if x<0 and y<0 then\n        deg1_base=deg1_base+math.pi\n    end\n    deg1_tri=math.asin(h/a)\n    deg1=deg1_base+deg1_tri\n    deg2=math.pi-(0.5*math.pi-deg1_tri)-math.acos(h/b)\n    deg3=deg2-deg1\n    sim.setJointTargetPosition(joint01,deg1)\n    sim.setJointTargetPosition(joint02,-deg2)\n    sim.setJointTargetPosition(joint03,deg3)\nend\n \n \nfunction sysCall_threadmain()\n    t=6\n    joint01=sim.getObjectHandle(\'joint1\')\n    joint02=sim.getObjectHandle(\'joint2\')\n    joint03=sim.getObjectHandle(\'joint3\')\n    jointz=sim.getObjectHandle(\'jointz\')\n    sim.setJointTargetPosition(joint01,0)\n    sim.setJointTargetPosition(joint02,0)\n    sim.setJointTargetPosition(joint03,0)\n    sim.setJointTargetPosition(jointz,0)\n    sim.setIntegerSignal("pad_switch",1)\n    sim.setJointTargetPosition(jointz,-0.015)\n    sim.wait(t)\n    sim.setJointTargetPosition(jointz,0)\n    sim.wait(t)\n    while sim.getSimulationState()~=sim.simulation_advancing_abouttostopre do\n    moove(0.2,0.7)\n    sim.wait(t)\n    sim.setIntegerSignal("pad_switch",0)\n    sim.wait(t)\n    sim.setIntegerSignal("pad_switch",1)\n    sim.setJointTargetPosition(jointz,-0.015)\n    sim.wait(t)\n    sim.setJointTargetPosition(jointz,0)\n    sim.wait(t)\n    moove(-0.3,-0.55)\n    sim.wait(t)\n    sim.setIntegerSignal("pad_switch",0)\n    sim.wait(t)\n    sim.setIntegerSignal("pad_switch",1)\n    sim.setJointTargetPosition(jointz,-0.015)\n    sim.wait(t)\n    sim.setJointTargetPosition(jointz,0)\n    end\nend \n', 'tags': '', 'url': '程式碼.html'}, {'title': 'RemoteAPI', 'text': '\n import sim as vrep\nimport math\nimport random\nimport time\nimport math\n\ndef moove(x,y):\n    a=0.4\n    b=0.4\n    c=math.pow((math.pow(x,2)+math.pow(y,2)),0.5)\n    s=(a+b+c)/2\n    area=math.pow((s*(s-a)*(s-b)*(s-c)),0.5)\n    h=area/(2*c)\n    deg1_base=math.atan(x/y)\n    if x<0 and y<0 :\n        deg1_base=deg1_base+math.pi\n    deg1_tri=math.asin(h/a)\n    deg1=deg1_base+deg1_tri\n    deg2=math.pi-(0.5*math.pi-deg1_tri)-math.acos(h/b)\n    deg3=deg2-deg1\n    vrep.simxSetJointTargetPosition(clientID,joint01,deg1,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint02,-deg2,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint03,deg3,opmode)\n\nprint (\'Start\')\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19997, True, True, 5000, 5)\n\nif clientID != -1:\n    print (\'Connected to remote API server\')\n\n    res = vrep.simxAddStatusbarMessage(\n        clientID, "This is 40823238 ",\n        vrep.simx_opmode_oneshot)\n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n\n\n    opmode = vrep.simx_opmode_oneshot_wait\n    STREAMING = vrep.simx_opmode_streaming\n\n\n    vrep.simxStartSimulation(clientID, opmode)\n    ret,joint01=vrep.simxGetObjectHandle(clientID,"joint1",opmode)\n    ret,joint02=vrep.simxGetObjectHandle(clientID,"joint2",opmode)\n    ret,joint03=vrep.simxGetObjectHandle(clientID,"joint3",opmode)\n    ret,jointz=vrep.simxGetObjectHandle(clientID,"jointz",opmode)\n    \n    vrep.simxSetJointTargetPosition(clientID,joint01,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint02,0,opmode)\n    vrep.simxSetJointTargetPosition(clientID,joint03,0,opmode)\n    vrep.simxSetIntegerSignal(clientID,"pad_switch",1,opmode)\n    vrep.simxSetJointTargetPosition(clientID,jointz,-0.015,opmode)\n    time.sleep(2)\n    vrep.simxSetJointTargetPosition(clientID,jointz,0,opmode)\n    while True:\n        moove(0.2,0.7)\n        time.sleep(2)\n        vrep.simxSetIntegerSignal(clientID,"pad_switch",0,opmode)\n        time.sleep(2)\n        vrep.simxSetIntegerSignal(clientID,"pad_switch",1,opmode)\n        vrep.simxSetJointTargetPosition(clientID,jointz,-0.015,opmode)\n        time.sleep(2)\n        vrep.simxSetJointTargetPosition(clientID,jointz,0,opmode)\n        moove(-0.3,-0.55)\n        time.sleep(2)\n        vrep.simxSetIntegerSignal(clientID,"pad_switch",0,opmode)\n        time.sleep(2)\n        vrep.simxSetIntegerSignal(clientID,"pad_switch",1,opmode)\n        vrep.simxSetJointTargetPosition(clientID,jointz,-0.015,opmode)\n        time.sleep(2)\n        vrep.simxSetJointTargetPosition(clientID,jointz,0,opmode) \n', 'tags': '', 'url': 'RemoteAPI.html'}, {'title': '鍵盤控制', 'text': 'a=第一軸順時針轉 \n d= 第一軸逆時針轉 \n w= 第二軸逆時針轉 \n s= 第二軸順時針轉 \n 下=吸盤向下並吸住 \n 上=吸盤向上 \n 左=吸盤逆時針轉 \n 右=吸盤順時針轉 \n 空白鍵=吸盤向下並放開\xa0 \n function sysCall_init()\n    joint01=sim.getObjectHandle(\'joint1\')\n    joint02=sim.getObjectHandle(\'joint2\')\n    joint03=sim.getObjectHandle(\'joint3\')\n    jointz=sim.getObjectHandle(\'jointz\')\n    sim.setJointTargetPosition(joint01,0)\n    sim.setJointTargetPosition(joint02,0)\n    sim.setJointTargetPosition(joint03,0)\n    sim.setJointTargetPosition(jointz,0)\n    deg1=0\n    deg2=0\n    deg3=0\nend\n \nfunction sysCall_actuation()\n    message,auxiliaryData=sim.getSimulatorMessage()\n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            if (auxiliaryData[1]==100) then\n            print("d")\n            deg1=deg1+1\n            sim.setJointTargetPosition(joint01,deg1*math.pi/180)\n            end\n            if (auxiliaryData[1]==97) then\n            print("a")\n            deg1=deg1-1\n            sim.setJointTargetPosition(joint01,deg1*math.pi/180)\n            end\n            if (auxiliaryData[1]==119) then\n            print("w")\n            deg2=deg2+1\n            sim.setJointTargetPosition(joint02,deg2*math.pi/180)\n            end\n            if (auxiliaryData[1]==115) then\n            print("s")\n            deg2=deg2-1\n            sim.setJointTargetPosition(joint02,deg2*math.pi/180)\n            end\n            if (auxiliaryData[1]==2008) then\n            print("down")\n            sim.setIntegerSignal("pad_switch",1)\n            sim.setJointTargetPosition(jointz,-0.015)\n            end\n            if (auxiliaryData[1]==2007) then\n            print("up")\n            sim.setJointTargetPosition(jointz,0)\n            end\n            if (auxiliaryData[1]==32) then\n            print("spase")\n            sim.setJointTargetPosition(jointz,-0.015)\n            sim.setIntegerSignal("pad_switch",0)\n            end\n            if (auxiliaryData[1]==2010) then\n            print("right")\n            deg3=deg3+1\n            sim.setJointTargetPosition(joint03,deg3*math.pi/180)\n            end\n            if (auxiliaryData[1]==2009) then\n            print("left")\n            deg3=deg3-1\n            sim.setJointTargetPosition(joint03,deg3*math.pi/180)\n            end\n        end\n    message,auxiliaryData=sim.getSimulatorMessage()\n    end\nend\n \n', 'tags': '', 'url': '鍵盤控制.html'}]};