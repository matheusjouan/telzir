import { Blob } from '../Blob';
import { Button } from '../Button';
import * as S from './styles';

export type CardPlanProps = {
  plan: string;
  price: string;
  describe: string;
  additionalText: string;
  additionalList: string[];
  blobImage: string;
  blobText: string;
  isBlobCustom: boolean;
  buttonText: string;
};

export const CardPlan = ({
  plan,
  price,
  describe,
  additionalText,
  additionalList,
  blobImage,
  blobText,
  isBlobCustom,
  buttonText,
}: CardPlanProps) => {
  return (
    <S.Container>
      <Blob blobImg={blobImage} customText={isBlobCustom}>
        {blobText}
      </Blob>

      <S.Plan>{plan}</S.Plan>

      <S.WrapperPrice>
        <S.Price>{price.split(',')[0]},</S.Price>

        <div>
          <S.DecimalPrice>{price.split(',')[1]}</S.DecimalPrice>
          <S.AddiotionalTextPrice>/mes</S.AddiotionalTextPrice>
        </div>
      </S.WrapperPrice>

      <S.Describe>{describe}</S.Describe>
      <S.Additional>{additionalText}</S.Additional>

      <S.AdditionalList>
        {additionalList.map((item, index) => (
          <S.AdditionalItem key={index}>{item}</S.AdditionalItem>
        ))}
      </S.AdditionalList>

      <Button typeOfButton="secondary" size="medium">
        {buttonText}
      </Button>
    </S.Container>
  );
};
