<%
//��ʾ����ʾ��α�дģ��ű�
var
  I: Integer;
  S: String;
  F: TCTMetaField;
begin
%>
��Һã���������ģ��ű����ɣ�ģ���ļ������ڳ���Ŀ¼�µ�Templates�ļ����С�
ע����ʾ��������������JSP��ASP��ҳ��ģ�弼��

��ǰģ���еı���Ŀ${AllModels.CurDataModal.Tables.Count}

<%
  for I:=0 to AllModels.CurDataModal.Tables.Count-1 do
  begin
    CurOut.Add('��'+IntToStr(I+1)+' '+AllModels.CurDataModal.Tables[I].Name+'['+AllModels.CurDataModal.Tables[I].Caption+']');
  end;
  
  CurOut.Add('');
  CurOut.Add('��ǰ����Ϊ��'+CurTable.Name);
  if CurTable.Caption='' then
    CurOut.Add('�߼����ƣ�û��ָ��')
  else
    CurOut.Add('�߼����ƣ�'+CurTable.Caption);
  CurOut.Add('');
  CurOut.Add(Format('�ֶ���Ŀ��%d',[CurTable.MetaFields.Count]));
  for I:=0 to CurTable.MetaFields.Count-1 do
  begin
    F:=CurTable.MetaFields.Items[I];
    S:=F.Name;
    if F.DisplayName<>'' then
      S:=S+'['+F.DisplayName+']';
%>
  �ֶ�${I+1}��${S}��(${F.GetLogicDataTypeName})
<%
  end;
%>

������һ��������SQL��

<%
  S:='select ';
  for I:=0 to CurTable.MetaFields.Count-1 do
  begin
    F:=CurTable.MetaFields.Items[I];
    S:=S+UpperCase(F.Name);
    if I<>CurTable.MetaFields.Count-1 then
    S:=S+', ';
  end;
  S:=S+' from '+UpperCase(CurTable.Name);
  CurOut.Add(S);
%>

ʾ������

<%
end.
%>