
mkdir -p docs

checkfilename="./docs/security-report.txt"
outdatedstring="Scanning for outdated dependencies"
vulerablestring="Scanning for known vulnerabilities"
unusedstring="Scanning for unused dependencies"
line="----------------------------------"

echo $'\n' >$checkfilename
echo $outdatedstring
echo $outdatedstring >>$checkfilename
echo $line >>$checkfilename
npm outdated >>$checkfilename 2>&1

echo $'\n' >>$checkfilename
echo $vulerablestring
echo $vulerablestring >>$checkfilename
echo $line >>$checkfilename
nsp check >>$checkfilename 2>&1
retire >>$checkfilename 2>&1

echo $'\n' >>$checkfilename
echo $unusedstring
echo $unusedstring >>$checkfilename
echo $line >>$checkfilename
depcheck >>$checkfilename 2>&1

echo
echo Please review the report at:
echo $checkfilename
echo

unset checkfilename
unset outdatedstring
unset vulerablestring
unset unusedstring
