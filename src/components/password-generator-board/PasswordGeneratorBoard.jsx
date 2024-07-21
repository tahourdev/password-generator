import React, { useState } from 'react';
import { RxClipboardCopy } from 'react-icons/rx';
import { notify } from '../../utils/Notify';
import { lowerCaseLetters, numbers, specialCharacters, upperCaseLetters } from '../../utils/Characters';
import { COPY_Fail, COPY_SUCCESS } from '../../utils/message';

const PasswordGeneratorBoard = () => {
  const [password, setPassword] = useState();
  const [passwordLength, setPasswordLength] = useState(26);
  const [number, setNumber] = useState(false);
  const [smallLetter, setSmallLetter] = useState(false);
  const [capitalLetter, setCapitalLetter] = useState(false);
  const [specailCharacter, setSpecailCharacter] = useState(false);

  const handleGeneratePassword = () => {
    if (!number && !smallLetter && !capitalLetter && !specailCharacter) {
      notify('To generate password you must select atleast one checkbox', true);
    } else {
      let characterList = '';
      if (number) {
        characterList = characterList + numbers;
      }
      if (smallLetter) {
        characterList = characterList + lowerCaseLetters;
      }
      if (capitalLetter) {
        characterList = characterList + upperCaseLetters;
      }
      if (specailCharacter) {
        characterList = characterList + specialCharacters;
      }
      setPassword(createPassword(characterList));
      notify('Password is generated successfully', false);
    }
  };

  const createPassword = (characterList) => {
    let password = '';
    const characterListLength = characterList.length;
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const handleCopyPassword = (e) => {
    if (password === '') {
      notify(COPY_Fail, true);
    } else {
      copyToClipboard(password);
      notify(COPY_SUCCESS);
    }
  };

  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="rounded-[10px] z-50 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm">
      <div className="p-8">
        <h2 className="text-cyan-500 font-bold text-2xl brightness-125">Password Generator</h2>
        <div className="w-full mt-6 bg-cyan-600/70 brightness-125 rounded-[5px] h-10 flex items-center">
          <h1 className="w-full p-2 text-slate-100">{password}</h1>
          <button onClick={handleCopyPassword} className="absolute right-2">
            <RxClipboardCopy color="white" />
          </button>
        </div>

        <div className="mt-6 space-y-2">
          <div className="inline-flex items-center w-full justify-between">
            <label htmlFor="password-strength" className="text-sm text-slate-100">
              Password Length
            </label>
            <input
              className="block bg-cyan-100 w-14 outline-none rounded-sm pl-[4px]"
              type="number"
              onChange={(e) => setPasswordLength(e.target.value)}
              defaultValue={passwordLength}
              name="password-strength"
              min="8"
              max="26"
              id="password-stregth"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
              type="checkbox"
              id="number"
              name="number"
            />
            <label htmlFor="number" className="text-sm text-slate-100">
              Number <span className="text-xs text-slate-400">(0-9)</span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              checked={smallLetter}
              onChange={(e) => setSmallLetter(e.target.checked)}
              type="checkbox"
              id="small-letter"
              name="small-letter"
            />
            <label htmlFor="small-letter" className="text-sm text-slate-100">
              Small Letter <span className="text-xs text-slate-400">(a-z)</span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              checked={capitalLetter}
              onChange={(e) => setCapitalLetter(e.target.checked)}
              type="checkbox"
              id="capital-letter"
              name="capital-letter"
            />
            <label htmlFor="capital-letter" className="text-sm text-slate-100">
              Capital Letter <span className="text-xs text-slate-400">(A-Z)</span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              checked={specailCharacter}
              onChange={(e) => setSpecailCharacter(e.target.checked)}
              type="checkbox"
              id="special-characters"
              name="special-characters"
            />
            <label htmlFor="special-characters" className="text-sm text-slate-100">
              Special Characters <span className="text-xs text-slate-400">(!#$&@...)</span>
            </label>
          </div>
        </div>
      </div>

      <div className="inline-flex justify-center w-full">
        <button
          onClick={handleGeneratePassword}
          className="max-h-fit mb-6 p-3 px-4 font-semibold bg-cyan-600/70 brightness-125 rounded-[5px] text-slate-100">
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGeneratorBoard;
