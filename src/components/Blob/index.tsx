import * as S from './styles';

export type BlobProps = {
  children: string;
  blobImg: string;
  customText: boolean;
};

export const Blob = ({ blobImg, customText = false, children }: BlobProps) => {
  return (
    <S.Container>
      <img src={blobImg} alt="" />
      {customText ? (
        <S.CustomText>{children}</S.CustomText>
      ) : (
        <S.NumberMinutes>{children}</S.NumberMinutes>
      )}
    </S.Container>
  );
};
